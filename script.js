document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const inputTemperature = document.getElementById("inputTemperature");
    const fromUnit = document.getElementById("fromUnit");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const inputValue = parseFloat(inputTemperature.value);
        const unit = fromUnit.value;
        let convertedValue;

        switch (unit) {
            case "celsius":
                convertedValue = celsiusConverter(inputValue);
                break;
            case "fahrenheit":
                convertedValue = fahrenheitConverter(inputValue);
                break;
            case "kelvin":
                convertedValue = kelvinConverter(inputValue);
                break;
            case "rankine":
                convertedValue = rankineConverter(inputValue);
                break;
            default:
                break;
        }

        result.textContent = `Converted Temperature: ${convertedValue.toFixed(2)} ${unit}`;
    });

    function celsiusConverter(temp) {
        return temp;
    }

    function fahrenheitConverter(temp) {
        return (temp * 9/5) + 32;
    }

    function kelvinConverter(temp) {
        return temp + 273.15;
    }

    function rankineConverter(temp) {
        return (temp + 273.15) * 9/5;
    }
});



