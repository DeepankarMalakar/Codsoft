// Get references to DOM elements
const temperatureInput = document.getElementById("Temparature");
const fromCelsiusRadio = document.getElementById("fromCelsius");
const fromFahrenheitRadio = document.getElementById("fromFahrenheit");
const toCelsiusRadio = document.getElementById("toCelsius");
const toFahrenheitRadio = document.getElementById("toFahrenheit");
const convertButton = document.getElementById("convertButton");
const resultElement = document.getElementById("result");

// Function to convert temperature
function convertTemperature() {
    const inputValue = parseFloat(temperatureInput.value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid temperature value.");
        return;
    }

    let convertedTemperature;

    // Convert from Celsius to Fahrenheit
    if (fromCelsiusRadio.checked && toFahrenheitRadio.checked) {
        convertedTemperature = (inputValue * 9) / 5 + 32;
    }
    // Convert from Fahrenheit to Celsius
    else if (fromFahrenheitRadio.checked && toCelsiusRadio.checked) {
        convertedTemperature = ((inputValue - 32) * 5) / 9;
    }
    // No conversion needed (same units)
    else {
        convertedTemperature = inputValue;
    }

    // Display the result
    resultElement.textContent = `Result: ${convertedTemperature.toFixed(2)}° ${fromCelsiusRadio.checked ? 'C' : 'F'}`;

    // Prevent the form from submitting
    return false;
}

// Attach the conversion function to the form's submit event
const tempConverterForm = document.getElementById("tempConverter");
tempConverterForm.addEventListener("submit", convertTemperature);
