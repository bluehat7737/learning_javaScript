console.clear();

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(77));

// function as a variable
var x = toCelsius(50);
console.log(x);
