import BMICalculator from "../index";

jest.mock("../index");

const data = {
    height: 168,
    weight: 62
}

const expected = {
    bmi: 21.97,
    bmiClassification: "normal",
    dbw: 61.20,
    kcal: 1836,
    nutrients: {
        carbohydrates: 275.40, 
        protein: 68.85, 
        fat: 51.00
    }
}

beforeEach(() => {
    BMICalculator.mockClear();
});


it('Check if the consumer should be able to call new() on BMICalculator', () => {
    const calculate = new BMICalculator();
    expect(calculate).toBeTruthy();
 });

  
it('Check if the user called the class constructor', () => {
    const calculate = new BMICalculator();
    expect(BMICalculator).toHaveBeenCalledTimes(1);
});
