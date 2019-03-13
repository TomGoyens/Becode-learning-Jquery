box = $('.square');
up = $('#up');
green = $('#green');
reset = $('#colorReset');
hide = $('#hide');
show = $('#show');

pos = box.position().top;


up.click(function(){
  console.log(pos);
  if (box.position().top > 0){
    pos -= 10;
  } else {
    pos = 100;
  }
  box.css('top', pos);
});

green.click(function(){
  box.css('background-color', 'green');
});

reset.click(function(){
  box.css('background-color', 'red');
});

hide.click(function(){
  box.hide();
});

show.click(function(){
  box.show();
});
