import * as ref from "./reference";

interface MeasurementValue {
  height: number;
  weight: number;
}

/**
 * 
 * Generate the final result
 * @param {number} height 
 * @param {number} weight
 * @return {Object} final results
 *  
 */
export const generateResults = (measurements: MeasurementValue) => {

    const bmi = computeBMI(measurements);
    const bmiUserClassification = getBmiClassification(bmi);
    const desirableBodyWeight = computeDesirableBodyWeight(measurements.height)
    const kcal = computeCalories(desirableBodyWeight, bmiUserClassification)
    const nutrients = getNutrientsBreakdown(kcal)

    return {
      bmi: bmi,
      bmiClassification: bmiUserClassification,
      dbw: desirableBodyWeight,
      kcal: kcal,
      nutrients: nutrients
    }
}


/**
 * 
 * Calculate BMI based on the measurement value given
 * @param {number} height 
 * @param {number} weight
 * @return {number} bmi result
 * 
 */
export const computeBMI = (measurements: MeasurementValue) => {

    const heightToMeter = measurements.height / 100
    const heightSquared = Math.pow(heightToMeter, 2);
    const bmi = measurements.weight / heightSquared;

    return Math.round((bmi + Number.EPSILON) * 100) / 100;
}


/**
 * 
 * @param {*} bmi computed BMI
 * @return {string} BMI Clasification
 */
export const getBmiClassification = (bmi: number) => {
  switch(true){
    case (bmi < ref.low):
        return ref.underweight

    case (bmi >= ref.low && bmi <= ref.high):
        return ref.normal

    case (bmi > ref.high):
        return ref.overweight
        
    default:
        return ref.defaultMessage
  }
}


/**
 * 
 * Compute the Desirable Body Weight
 * @param {*} height 
 * @return {number} 
 * 
 */
export const computeDesirableBodyWeight = (height: number) => {

  const heightMinusOneHundred = height - 100
  const heightTenPercent = heightMinusOneHundred * 0.10
  const desirableBodyWeight = heightMinusOneHundred - heightTenPercent

  return desirableBodyWeight
}


/**
 * 
 * Compute the Calories
 * @param {*} dbw Desirable Body Weight
 * @param {*} classification BMI classification
 * 
 */
export const computeCalories = (dbw: number, classification: string) => {

  let kcal
  let computedDbw

  switch (classification){
      case ref.underweight:
          computedDbw = dbw + (dbw * 0.10)
          kcal = computedDbw * 35
          return kcal

      case ref.normal:
          kcal = dbw * 30
          return kcal

      case ref.overweight:
          computedDbw = dbw - (dbw * 0.10)
          kcal = computedDbw * 25
          return kcal

      default:
          return ref.defaultValue
  }
}


/**
 * 
 * Getting the nutrients breakdown
 * @param {*} kcal calories
 * @returns {Object} list nutrients
 */
export const getNutrientsBreakdown = (kcal: number) => {
  return {
      carbohydrates: (kcal * 0.6) / 4,
      protein: (kcal * 0.15) / 4,
      fat: (kcal * 0.25) / 9
  }
}