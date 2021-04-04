"use strict";
exports.__esModule = true;
var calculate_1 = require("./lib/calculate");
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
        return calculate_1.generateResults(data);
    };
    return BMICalculator;
}());
exports["default"] = BMICalculator;
