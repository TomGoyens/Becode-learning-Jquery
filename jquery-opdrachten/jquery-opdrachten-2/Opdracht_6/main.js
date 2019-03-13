// Write your solution here
var text = $('#text');
function changeColorGreen(){
  text.css('color', 'green');
}
function changeColorRed(){
  text.css('color', 'red');
}
function changeColorBlue(){
  text.css('color', 'blue');
}
function changeColorBlack(){
  text.css('color', 'black');
}
$('#green').hover(changeColorGreen);
$('#red').hover(changeColorRed);
$('#blue').hover(changeColorBlue);
$('.color').mouseleave(changeColorBlack);
