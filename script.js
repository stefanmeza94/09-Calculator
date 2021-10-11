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

const calculator = document.querySelector('.calculator');
const output = document.querySelector('.js-output');
const keys = document.querySelector('.operators');
const ime = 'meza'.length;

function calculate(firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  let result = '';
  if (operator === 'plus') result = firstNumber + secondNumber;
  if (operator === 'minus') result = firstNumber - secondNumber;
  if (operator === 'divide') result = firstNumber / secondNumber;
  if (operator === 'times') result = firstNumber * secondNumber;

  return result;
}

// Caculator functionality
keys.addEventListener('click', e => {
  if (!e.target.closest('div')) return;

  const key = e.target;
  const keyValue = key.textContent;
  const displayValue = output.textContent;
  const {type} = key.dataset;
  const {previousKeyType} = calculator.dataset;

  if (key.dataset.state) key.dataset.state = '';

  // Checking if this is a number key
  if (type === 'number') {
    if (displayValue === '0') {
      output.textContent = keyValue;
    } else if (previousKeyType === 'operator') {
      output.textContent = keyValue;
    } else {
      output.textContent = displayValue + keyValue;
    }
  }

  // Checking if this is a operator key
  if (type === 'operator') {
    // display value in this state contains firstNumber and we store it to data-firstNumber attribute
    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type === 'equal') {
    // Perform a calculation
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;

    // console.log(calculate(firstNumber, opera
    
    output.textContent = calculate(firstNumber, operator, secondNumber);    
    
  }
s

  if (type === 'delete') {
    if (output.textContent === '0') {
      return;
    } else {
      console.log('radi kad ima neki broj a ne kad je nula')
      output.textContent = [...output.textContent].slice(0, -1).join('');
    }
  }

  // checking if reset
  if (type === 'reset') {
    output.textContent = '0';
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  }

  calculator.dataset.previousKeyType = type;
});

const niz = ['1', '2', '3'];
