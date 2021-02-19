import * as cal from "../lib/calculate"

const data = {
  height: 168,
  weight: 62
}

/**
 * Compute the BMi
 */
describe('Compute the BMI', () => {
  test('returns the correct result', () => {
    expect(cal.computeBMI(data)).toBe(21.97);
  });
});


/**
 * Check the BMI Classfication
 */
describe('Get the BMI Classification', () => {
  test('return the BMI Classification', () => {
    expect(cal.getBmiClassification(cal.computeBMI(data))).toEqual('normal');
  })
});


/**
 * Compute the Desirable Body Weight
 */
describe('Compute the Desirable Body Weight', () => {
  test('returns the correct result', () => {
    expect(cal.computeDesirableBodyWeight(data.height)).toBe(61.20);
  });
});


/**
 * Compute the Calories required
 */
describe('Compute the Calories required', () => {
  test('returns the correct result', () => {
    expect(cal.computeCalories(61.20, 'normal')).toBe(1836);
  });
});



/**
 * Compute the Calories required
 */
describe('Breakdown the nutritients', () => {
  test('returns the nutrients', () => {
    expect(cal.getNutrientsBreakdown(1836)).toEqual({
      carbohydrates: 275.40, 
      protein: 68.85, 
      fat: 51.00
    });
  });
});




