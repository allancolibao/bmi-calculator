import { generateResults } from "./lib/calculate";

interface MeasurementValue {
  height: number;
  weight: number;
}

export default class BMICalculator {

  /**
   * Height
   */
  private height: number;


  /**
   * Weight
   */
  private weight: number;


  /**
   * Calculate the result based 
   * on the mesurement value
   */
  public generate: object;


  constructor(measurements: MeasurementValue) {
    if (!measurements) throw new Error('Measurement required!');

    this.height = measurements.height;
    this.weight =  measurements.weight;

  }

  /**
   * 
   * Generate the whole result
   * 
   */
  public results() {

    const data = {
      height: this.height,
      weight: this.weight
    }

    return generateResults(data);
  }

}