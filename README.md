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

## Support

<a href="https://www.buymeacoffee.com/allancolibao"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=allancolibao&button_colour=BD5FFF&font_colour=ffffff&font_family=Arial&outline_colour=000000&coffee_colour=FFDD00"></a>