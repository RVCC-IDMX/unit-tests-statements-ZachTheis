/*
 * stmnts-03.js
 * Language: javascript
 * Test: tests/stmnts-03.test.js
 * Path: src/stmnts-03.js
 * Temperature Calculator
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  return Math.round((((fahrenheit - 32) * 5) / 9) * 100) / 100;
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * (9 / 5) + 32) * 100) / 100;
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
