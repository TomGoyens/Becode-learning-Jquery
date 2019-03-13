target = Math.ceil(Math.random()*100);
console.log(target);

function check(){
  guess = parseInt($('#guess').val());

  if(guess == target){
    $('.output').html('juist!');
  } else if (guess < target) {
    $('.output').html('meer');
  } else {
    $('.output').html('minder');
  }
}

$('#go').click(check);
