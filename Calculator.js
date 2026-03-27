function inputToDisplay(value) {
  const display = document.querySelector(".calculator-display");
  display.value += value;
}

function calculate() {
  const display = document.querySelector(".calculator-display");
  display.value = eval(display.value);

  if (typeof display.value === "number" && !Number.isInteger(display.value)) {
    display.value = Math.round(display.value * 100) / 100;
  }
}

function deleteAll() {
  const display = document.querySelector(".calculator-display");
  display.value = "";
}
