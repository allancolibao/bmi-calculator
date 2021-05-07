<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="allancolibao" data-color="#BD5FFF" data-emoji="🍕"  data-font="Arial" data-text="Buy me a pizza" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>

# BMI Calculator

Compute BMI and breakdown nutrients

## Installation

```bash
npm i compute-bmi
```

## Usage

```javascript
import BMICalculator from "compute-bmi";

const calculate = new BMICalculator({height:value, weight:value});
const results = calculate.results();

```

## Sample response

```

{
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


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/allancolibao/bmi-calculator/blob/main/LICENSE)