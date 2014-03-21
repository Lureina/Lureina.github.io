// Web stuff is complicated. When I learned to program it was just logging numbers to the console, like this:

console.log([1, 1, 2, 3, 5, 8]);

// You all have to learn how HTML, CSS and JS work together, and that is tricky

// Zombies are more fun. Let's use jquery to find the  current color of the circle

var currentColor = $('.zombie').css('background-color');
// And let's print it out
console.log(currentColor);

// Let's make a function to change the zombie color by modifying the css of the zombie element

var changeColor = function(color,color2) {
  $('.zombie').css('color', color).css('background-color',color2);
}

// Let's try out the function

changeColor('rgb(275, 50, 100)');

var changeToRed = function(){
  changeColor('red','blue');
}

var changeToBlue = function(){
  changeColor('blue','pink');
}

var changeTwice = function(){
  changeToRed();
  window.setTimeout(changeToBlue, 50);
}

window.setInterval(changeTwice, 70);
