function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(opt, a, b) {
  if (opt === "+") return add(a, b);
  if (opt === "-") return subtract(a, b);
  if (opt === "×") return multiply(a, b);
  if (opt === "÷") return divide(a, b);
}