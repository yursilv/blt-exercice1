function sum(form) {
  const firstNumber = form.firstNumber.value;
  const secondNumber = form.secondNumber.value;
  let result = (+firstNumber) + (+secondNumber);

  let firstNumberPrecision = 0;
  let secondNumberPrecision = 0;

  if (firstNumber.includes('.')) {
  	firstNumberPrecision = firstNumber.split('.')[1].length;
  }
  if (secondNumber.includes('.')) {
    secondNumberPrecision = secondNumber.split('.')[1].length;
  }
  
  const maxPrecision = firstNumberPrecision > secondNumberPrecision ? firstNumberPrecision : secondNumberPrecision;

  alert("Результат:\n\n" + result.toFixed(maxPrecision));
}