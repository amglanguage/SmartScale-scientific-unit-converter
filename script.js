
function convertUnit() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  const unitFactors = {
    'km': 1e3,
    'm': 1,
    'cm': 1e-2,
    'mm': 1e-3,
    'μm': 1e-6,
    'nm': 1e-9
  };

  if (fromUnit in unitFactors && toUnit in unitFactors && !isNaN(inputValue)) {
    const baseValue = inputValue * unitFactors[fromUnit];
    const converted = baseValue / unitFactors[toUnit];
    const scientific = converted.toExponential(2).replace(/e([+-]?\d+)/, '×10<sup>$1</sup>');
    document.getElementById("result").innerHTML = `${inputValue} ${fromUnit} = ${scientific} ${toUnit}`;
  } else {
    document.getElementById("result").innerHTML = "Invalid input or unit selection.";
  }
}
