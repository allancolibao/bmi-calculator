/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _lib_calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/calculate */ "./src/lib/calculate.ts");

var BMICalculator = /** @class */ (function () {
    function BMICalculator(measurements) {
        if (!measurements)
            throw new Error('Measurement required!');
        this.height = measurements.height;
        this.weight = measurements.weight;
    }
    /**
     *
     * Generate the whole result
     *
     */
    BMICalculator.prototype.results = function () {
        var data = {
            height: this.height,
            weight: this.weight
        };
        return (0,_lib_calculate__WEBPACK_IMPORTED_MODULE_0__.generateResults)(data);
    };
    return BMICalculator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BMICalculator);


/***/ }),

/***/ "./src/lib/calculate.ts":
/*!******************************!*\
  !*** ./src/lib/calculate.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResults": () => /* binding */ generateResults,
/* harmony export */   "computeBMI": () => /* binding */ computeBMI,
/* harmony export */   "getBmiClassification": () => /* binding */ getBmiClassification,
/* harmony export */   "computeDesirableBodyWeight": () => /* binding */ computeDesirableBodyWeight,
/* harmony export */   "computeCalories": () => /* binding */ computeCalories,
/* harmony export */   "getNutrientsBreakdown": () => /* binding */ getNutrientsBreakdown
/* harmony export */ });
/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reference */ "./src/lib/reference.ts");

/**
 *
 * Generate the final result
 * @param {number} height
 * @param {number} weight
 * @return {Object} final results
 *
 */
var generateResults = function (measurements) {
    var bmi = computeBMI(measurements);
    var bmiUserClassification = getBmiClassification(bmi);
    var desirableBodyWeight = computeDesirableBodyWeight(measurements.height);
    var kcal = computeCalories(desirableBodyWeight, bmiUserClassification);
    var nutrients = getNutrientsBreakdown(kcal);
    return {
        bmi: bmi,
        bmiClassification: bmiUserClassification,
        dbw: desirableBodyWeight,
        kcal: kcal,
        nutrients: nutrients
    };
};
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
/**
 *
 * @param {*} bmi computed BMI
 * @return {string} BMI Clasification
 */
var getBmiClassification = function (bmi) {
    switch (true) {
        case (bmi < _reference__WEBPACK_IMPORTED_MODULE_0__.low):
            return _reference__WEBPACK_IMPORTED_MODULE_0__.underweight;
        case (bmi >= _reference__WEBPACK_IMPORTED_MODULE_0__.low && bmi <= _reference__WEBPACK_IMPORTED_MODULE_0__.high):
            return _reference__WEBPACK_IMPORTED_MODULE_0__.normal;
        case (bmi > _reference__WEBPACK_IMPORTED_MODULE_0__.high):
            return _reference__WEBPACK_IMPORTED_MODULE_0__.overweight;
        default:
            return _reference__WEBPACK_IMPORTED_MODULE_0__.defaultMessage;
    }
};
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
        case _reference__WEBPACK_IMPORTED_MODULE_0__.underweight:
            computedDbw = dbw + (dbw * 0.10);
            kcal = computedDbw * 35;
            return kcal;
        case _reference__WEBPACK_IMPORTED_MODULE_0__.normal:
            kcal = dbw * 30;
            return kcal;
        case _reference__WEBPACK_IMPORTED_MODULE_0__.overweight:
            computedDbw = dbw - (dbw * 0.10);
            kcal = computedDbw * 25;
            return kcal;
        default:
            return _reference__WEBPACK_IMPORTED_MODULE_0__.defaultValue;
    }
};
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


/***/ }),

/***/ "./src/lib/reference.ts":
/*!******************************!*\
  !*** ./src/lib/reference.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "low": () => /* binding */ low,
/* harmony export */   "high": () => /* binding */ high,
/* harmony export */   "underweight": () => /* binding */ underweight,
/* harmony export */   "normal": () => /* binding */ normal,
/* harmony export */   "overweight": () => /* binding */ overweight,
/* harmony export */   "defaultMessage": () => /* binding */ defaultMessage,
/* harmony export */   "defaultValue": () => /* binding */ defaultValue
/* harmony export */ });
var low = 18.5;
var high = 24.9;
var underweight = 'underweight';
var normal = 'normal';
var overweight = 'overweight';
var defaultMessage = 'Unable to get classification';
var defaultValue = 0;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy9saWIvY2FsY3VsYXRlLnRzIiwid2VicGFjazovL3RzLy4vc3JjL2xpYi9yZWZlcmVuY2UudHMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBT2xEO0lBcUJFLHVCQUFZLFlBQThCO1FBQ3hDLElBQUksQ0FBQyxZQUFZO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFJLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFFckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwrQkFBTyxHQUFkO1FBRUUsSUFBTSxJQUFJLEdBQUc7WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCO1FBRUQsT0FBTywrREFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFSCxvQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRGtDO0FBT25DOzs7Ozs7O0dBT0c7QUFDSSxJQUFNLGVBQWUsR0FBRyxVQUFDLFlBQThCO0lBRTFELElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJ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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklNLElBQU0sR0FBRyxHQUFHLElBQUk7QUFDaEIsSUFBTSxJQUFJLEdBQUcsSUFBSTtBQUVqQixJQUFNLFdBQVcsR0FBRyxhQUFhO0FBQ2pDLElBQU0sTUFBTSxHQUFHLFFBQVE7QUFDdkIsSUFBTSxVQUFVLEdBQUcsWUFBWTtBQUMvQixJQUFNLGNBQWMsR0FBRyw4QkFBOEI7QUFDckQsSUFBTSxZQUFZLEdBQUcsQ0FBQzs7Ozs7OztVQ1A3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVSZXN1bHRzIH0gZnJvbSBcIi4vbGliL2NhbGN1bGF0ZVwiO1xyXG5cclxuaW50ZXJmYWNlIE1lYXN1cmVtZW50VmFsdWUge1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTUlDYWxjdWxhdG9yIHtcclxuXHJcbiAgLyoqXHJcbiAgICogSGVpZ2h0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFdlaWdodFxyXG4gICAqL1xyXG4gIHByaXZhdGUgd2VpZ2h0OiBudW1iZXI7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBDYWxjdWxhdGUgdGhlIHJlc3VsdCBiYXNlZCBcclxuICAgKiBvbiB0aGUgbWVzdXJlbWVudCB2YWx1ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZW5lcmF0ZTogb2JqZWN0O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IobWVhc3VyZW1lbnRzOiBNZWFzdXJlbWVudFZhbHVlKSB7XHJcbiAgICBpZiAoIW1lYXN1cmVtZW50cykgdGhyb3cgbmV3IEVycm9yKCdNZWFzdXJlbWVudCByZXF1aXJlZCEnKTtcclxuXHJcbiAgICB0aGlzLmhlaWdodCA9IG1lYXN1cmVtZW50cy5oZWlnaHQ7XHJcbiAgICB0aGlzLndlaWdodCA9ICBtZWFzdXJlbWVudHMud2VpZ2h0O1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEdlbmVyYXRlIHRoZSB3aG9sZSByZXN1bHRcclxuICAgKiBcclxuICAgKi9cclxuICBwdWJsaWMgcmVzdWx0cygpIHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICB3ZWlnaHQ6IHRoaXMud2VpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdlbmVyYXRlUmVzdWx0cyhkYXRhKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0ICogYXMgcmVmIGZyb20gXCIuL3JlZmVyZW5jZVwiO1xyXG5cclxuaW50ZXJmYWNlIE1lYXN1cmVtZW50VmFsdWUge1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEdlbmVyYXRlIHRoZSBmaW5hbCByZXN1bHRcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBcclxuICogQHBhcmFtIHtudW1iZXJ9IHdlaWdodFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZpbmFsIHJlc3VsdHNcclxuICogIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUmVzdWx0cyA9IChtZWFzdXJlbWVudHM6IE1lYXN1cmVtZW50VmFsdWUpID0+IHtcclxuXHJcbiAgICBjb25zdCBibWkgPSBjb21wdXRlQk1JKG1lYXN1cmVtZW50cyk7XHJcbiAgICBjb25zdCBibWlVc2VyQ2xhc3NpZmljYXRpb24gPSBnZXRCbWlDbGFzc2lmaWNhdGlvbihibWkpO1xyXG4gICAgY29uc3QgZGVzaXJhYmxlQm9keVdlaWdodCA9IGNvbXB1dGVEZXNpcmFibGVCb2R5V2VpZ2h0KG1lYXN1cmVtZW50cy5oZWlnaHQpXHJcbiAgICBjb25zdCBrY2FsID0gY29tcHV0ZUNhbG9yaWVzKGRlc2lyYWJsZUJvZHlXZWlnaHQsIGJtaVVzZXJDbGFzc2lmaWNhdGlvbilcclxuICAgIGNvbnN0IG51dHJpZW50cyA9IGdldE51dHJpZW50c0JyZWFrZG93bihrY2FsKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJtaTogYm1pLFxyXG4gICAgICBibWlDbGFzc2lmaWNhdGlvbjogYm1pVXNlckNsYXNzaWZpY2F0aW9uLFxyXG4gICAgICBkYnc6IGRlc2lyYWJsZUJvZHlXZWlnaHQsXHJcbiAgICAgIGtjYWw6IGtjYWwsXHJcbiAgICAgIG51dHJpZW50czogbnV0cmllbnRzXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIENhbGN1bGF0ZSBCTUkgYmFzZWQgb24gdGhlIG1lYXN1cmVtZW50IHZhbHVlIGdpdmVuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3ZWlnaHRcclxuICogQHJldHVybiB7bnVtYmVyfSBibWkgcmVzdWx0XHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbXB1dGVCTUkgPSAobWVhc3VyZW1lbnRzOiBNZWFzdXJlbWVudFZhbHVlKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGVpZ2h0VG9NZXRlciA9IG1lYXN1cmVtZW50cy5oZWlnaHQgLyAxMDBcclxuICAgIGNvbnN0IGhlaWdodFNxdWFyZWQgPSBNYXRoLnBvdyhoZWlnaHRUb01ldGVyLCAyKTtcclxuICAgIGNvbnN0IGJtaSA9IG1lYXN1cmVtZW50cy53ZWlnaHQgLyBoZWlnaHRTcXVhcmVkO1xyXG5cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKChibWkgKyBOdW1iZXIuRVBTSUxPTikgKiAxMDApIC8gMTAwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IGJtaSBjb21wdXRlZCBCTUlcclxuICogQHJldHVybiB7c3RyaW5nfSBCTUkgQ2xhc2lmaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEJtaUNsYXNzaWZpY2F0aW9uID0gKGJtaTogbnVtYmVyKSA9PiB7XHJcbiAgc3dpdGNoKHRydWUpe1xyXG4gICAgY2FzZSAoYm1pIDwgcmVmLmxvdyk6XHJcbiAgICAgICAgcmV0dXJuIHJlZi51bmRlcndlaWdodFxyXG5cclxuICAgIGNhc2UgKGJtaSA+PSByZWYubG93ICYmIGJtaSA8PSByZWYuaGlnaCk6XHJcbiAgICAgICAgcmV0dXJuIHJlZi5ub3JtYWxcclxuXHJcbiAgICBjYXNlIChibWkgPiByZWYuaGlnaCk6XHJcbiAgICAgICAgcmV0dXJuIHJlZi5vdmVyd2VpZ2h0XHJcbiAgICAgICAgXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiByZWYuZGVmYXVsdE1lc3NhZ2VcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIENvbXB1dGUgdGhlIERlc2lyYWJsZSBCb2R5IFdlaWdodFxyXG4gKiBAcGFyYW0geyp9IGhlaWdodCBcclxuICogQHJldHVybiB7bnVtYmVyfSBcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29tcHV0ZURlc2lyYWJsZUJvZHlXZWlnaHQgPSAoaGVpZ2h0OiBudW1iZXIpID0+IHtcclxuXHJcbiAgY29uc3QgaGVpZ2h0TWludXNPbmVIdW5kcmVkID0gaGVpZ2h0IC0gMTAwXHJcbiAgY29uc3QgaGVpZ2h0VGVuUGVyY2VudCA9IGhlaWdodE1pbnVzT25lSHVuZHJlZCAqIDAuMTBcclxuICBjb25zdCBkZXNpcmFibGVCb2R5V2VpZ2h0ID0gaGVpZ2h0TWludXNPbmVIdW5kcmVkIC0gaGVpZ2h0VGVuUGVyY2VudFxyXG5cclxuICByZXR1cm4gZGVzaXJhYmxlQm9keVdlaWdodFxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBDb21wdXRlIHRoZSBDYWxvcmllc1xyXG4gKiBAcGFyYW0geyp9IGRidyBEZXNpcmFibGUgQm9keSBXZWlnaHRcclxuICogQHBhcmFtIHsqfSBjbGFzc2lmaWNhdGlvbiBCTUkgY2xhc3NpZmljYXRpb25cclxuICogXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29tcHV0ZUNhbG9yaWVzID0gKGRidzogbnVtYmVyLCBjbGFzc2lmaWNhdGlvbjogc3RyaW5nKSA9PiB7XHJcblxyXG4gIGxldCBrY2FsXHJcbiAgbGV0IGNvbXB1dGVkRGJ3XHJcblxyXG4gIHN3aXRjaCAoY2xhc3NpZmljYXRpb24pe1xyXG4gICAgICBjYXNlIHJlZi51bmRlcndlaWdodDpcclxuICAgICAgICAgIGNvbXB1dGVkRGJ3ID0gZGJ3ICsgKGRidyAqIDAuMTApXHJcbiAgICAgICAgICBrY2FsID0gY29tcHV0ZWREYncgKiAzNVxyXG4gICAgICAgICAgcmV0dXJuIGtjYWxcclxuXHJcbiAgICAgIGNhc2UgcmVmLm5vcm1hbDpcclxuICAgICAgICAgIGtjYWwgPSBkYncgKiAzMFxyXG4gICAgICAgICAgcmV0dXJuIGtjYWxcclxuXHJcbiAgICAgIGNhc2UgcmVmLm92ZXJ3ZWlnaHQ6XHJcbiAgICAgICAgICBjb21wdXRlZERidyA9IGRidyAtIChkYncgKiAwLjEwKVxyXG4gICAgICAgICAga2NhbCA9IGNvbXB1dGVkRGJ3ICogMjVcclxuICAgICAgICAgIHJldHVybiBrY2FsXHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHJlZi5kZWZhdWx0VmFsdWVcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEdldHRpbmcgdGhlIG51dHJpZW50cyBicmVha2Rvd25cclxuICogQHBhcmFtIHsqfSBrY2FsIGNhbG9yaWVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IGxpc3QgbnV0cmllbnRzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0TnV0cmllbnRzQnJlYWtkb3duID0gKGtjYWw6IG51bWJlcikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAgIGNhcmJvaHlkcmF0ZXM6IChrY2FsICogMC42KSAvIDQsXHJcbiAgICAgIHByb3RlaW46IChrY2FsICogMC4xNSkgLyA0LFxyXG4gICAgICBmYXQ6IChrY2FsICogMC4yNSkgLyA5XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGxvdyA9IDE4LjVcclxuZXhwb3J0IGNvbnN0IGhpZ2ggPSAyNC45XHJcblxyXG5leHBvcnQgY29uc3QgdW5kZXJ3ZWlnaHQgPSAndW5kZXJ3ZWlnaHQnXHJcbmV4cG9ydCBjb25zdCBub3JtYWwgPSAnbm9ybWFsJ1xyXG5leHBvcnQgY29uc3Qgb3ZlcndlaWdodCA9ICdvdmVyd2VpZ2h0J1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdE1lc3NhZ2UgPSAnVW5hYmxlIHRvIGdldCBjbGFzc2lmaWNhdGlvbidcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRWYWx1ZSA9IDAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=