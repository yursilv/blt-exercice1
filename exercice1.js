function sum(form) {
  const firstNumber = +form.firstNumber.value;
  const secondNumber = +form.secondNumber.value;
  const result = firstNumber + secondNumber;
  alert("Результат:\n\n" + result);
}