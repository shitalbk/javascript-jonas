/* program to calculate temperature */

const measureKelvin = function (){
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // FIX
    value: Number(prompt('Degree celsius:')),
  };
  // FIND
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
}
console.log(measureKelvin());