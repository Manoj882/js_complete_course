'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius')),
  };

  // B) FIND
  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;

  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
