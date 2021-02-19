"use strict";
exports.__esModule = true;
exports.getNutrientsBreakdown = exports.computeCalories = exports.computeDesirableBodyWeight = exports.getBmiClassification = exports.computeBMI = exports.generateResults = void 0;
var ref = require("./reference");
/**
 *
 * Generate the final result
 * @param {number} height
 * @param {number} weight
 * @return {Object} final results
 *
 */
var generateResults = function (measurements) {
    var bmi = exports.computeBMI(measurements);
    var bmiUserClassification = exports.getBmiClassification(bmi);
    var desirableBodyWeight = exports.computeDesirableBodyWeight(measurements.height);
    var kcal = exports.computeCalories(desirableBodyWeight, bmiUserClassification);
    var nutrients = exports.getNutrientsBreakdown(kcal);
    return {
        bmi: bmi,
        bmiClassification: bmiUserClassification,
        dbw: desirableBodyWeight,
        kcal: kcal,
        nutrients: nutrients
    };
};
exports.generateResults = generateResults;
/**
 *
 * Calculate BMI based on the measurement value given
 * @param {number} height
 * @param {number} weight
 * @return {number} bmi result
 *
 */
var computeBMI = function (measurements) {
    var heightToMeter = measurements.height / 100;
    var heightSquared = Math.pow(heightToMeter, 2);
    var bmi = measurements.weight / heightSquared;
    return Math.round((bmi + Number.EPSILON) * 100) / 100;
};
exports.computeBMI = computeBMI;
/**
 *
 * @param {*} bmi computed BMI
 * @return {string} BMI Clasification
 */
var getBmiClassification = function (bmi) {
    switch (true) {
        case (bmi < ref.low):
            return ref.underweight;
        case (bmi >= ref.low && bmi <= ref.high):
            return ref.normal;
        case (bmi > ref.high):
            return ref.overweight;
        default:
            return ref.defaultMessage;
    }
};
exports.getBmiClassification = getBmiClassification;
/**
 *
 * Compute the Desirable Body Weight
 * @param {*} height
 * @return {number}
 *
 */
var computeDesirableBodyWeight = function (height) {
    var heightMinusOneHundred = height - 100;
    var heightTenPercent = heightMinusOneHundred * 0.10;
    var desirableBodyWeight = heightMinusOneHundred - heightTenPercent;
    return desirableBodyWeight;
};
exports.computeDesirableBodyWeight = computeDesirableBodyWeight;
/**
 *
 * Compute the Calories
 * @param {*} dbw Desirable Body Weight
 * @param {*} classification BMI classification
 *
 */
var computeCalories = function (dbw, classification) {
    var kcal;
    var computedDbw;
    switch (classification) {
        case ref.underweight:
            computedDbw = dbw + (dbw * 0.10);
            kcal = computedDbw * 35;
            return kcal;
        case ref.normal:
            kcal = dbw * 30;
            return kcal;
        case ref.overweight:
            computedDbw = dbw - (dbw * 0.10);
            kcal = computedDbw * 25;
            return kcal;
        default:
            return ref.defaultValue;
    }
};
exports.computeCalories = computeCalories;
/**
 *
 * Getting the nutrients breakdown
 * @param {*} kcal calories
 * @returns {Object} list nutrients
 */
var getNutrientsBreakdown = function (kcal) {
    return {
        carbohydrates: (kcal * 0.6) / 4,
        protein: (kcal * 0.15) / 4,
        fat: (kcal * 0.25) / 9
    };
};
exports.getNutrientsBreakdown = getNutrientsBreakdown;
