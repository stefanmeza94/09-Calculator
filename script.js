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



