clicks = 0;

$('#plus').click(function(){
  clicks += 1;
  $('.text span').html(clicks);
});
$('#min').click(function(){
  clicks -= 1;
  $('.text span').html(clicks);
});
