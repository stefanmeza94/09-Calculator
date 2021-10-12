const container = document.querySelector('.container');
const colorChooserWrapper = document.querySelector('.color-chooser-wrapper');
const circle1 = document.querySelector('.js-circle1');
const circle2 = document.querySelector('.js-circle2');
const circle3 = document.querySelector('.js-circle3');

// toggle theme 1
circle1.addEventListener('click', function() {
  if (circle1.classList.contains('active')) {
    return;
  } else {
    circle1.classList.add('active');
    circle2.classList.remove('active');
    circle3.classList.remove('active');
    container.classList.remove('light');
		container.classList.remove('highContrast');
  }
});

// toggle theme 2
circle2.addEventListener('click', function() {
  circle2.classList.add('active');
  circle1.classList.remove('active');
  circle3.classList.remove('active');
  container.classList.add('light');
	container.classList.remove('highContrast');
});

// toggle theme 3
circle3.addEventListener('click', function() {
  circle3.classList.add('active');
  circle1.classList.remove('active');
  circle2.classList.remove('active');
	container.classList.remove('light');
	container.classList.add('highContrast');
});

// CALCULATOR
const displayResult = document.querySelector('.js-output');
const numbers = document.querySelectorAll('.js-number');
const operations = document.querySelectorAll('.js-operator');
const del = document.querySelector('.js-delete');
const reset = document.querySelector('.js-reset');
const equal = document.querySelector('.js-equal');

let result1 = '';
let result2 = '';
let lastOperation = '';
let result = null;

numbers.forEach(number => {
  number.addEventListener('click', function(e) {
    // cannot start with a dot if there is nothing typeds yet
    if (e.target.innerText === '.' && displayResult.textContent === '') {
      return;
    }

    result2 += e.target.innerText;
    displayResult.innerHTML = result2;
  });
});

operations.forEach(operation => {
  operation.addEventListener('click', function(e) {
    if (!result2) return; 

    const operationName = e.target.innerText; 

    if (result1 && result2 && lastOperation) {
      doCalculation();
    } else {
      result = parseFloat(result2);
    }

    savedResult();
    lastOperation = operationName;
    console.log(result1, result2);
  });
});

function savedResult() {
  result1 += result2;
  displayResult.innerText = '';
  result2 = '';
}

function doCalculation() {
  if (lastOperation === '+') result = parseFloat(result) + parseFloat(result2);
  if (lastOperation === '-') result = parseFloat(result) - parseFloat(result2);
  if (lastOperation === 'x') result = parseFloat(result) * parseFloat(result2);
  if (lastOperation === '/') result = parseFloat(result) / parseFloat(result2);
}

equal.addEventListener('click', function(e) {
  console.log(result1, result2, result);
  if (!result1 && !result2) return;
  doCalculation();
  result += '';
  console.log(result);
  displayResult.innerText = `${result.includes('.') ? (+result).toFixed(2) : +result}`;
  result1 = '';
  result2 = '';
});

reset.addEventListener('click', function(e) {
  displayResult.innerText = '';
  result1 = '';
  result2 = '';
  result = '';
})

del.addEventListener('click', function() {
  displayResult.innerText = [...displayResult.innerText].slice(0, -1).join('');
})

