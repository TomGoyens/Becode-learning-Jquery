clicks = 0;

$('button').click(function(){
  clicks += 1;
  $('.text span').html(clicks);
});
