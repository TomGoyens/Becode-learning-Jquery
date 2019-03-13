//initialiseer slider
$next = $('#next');
$prev = $("#prev");

$slides = $('.slide');
$indexes = $('.index');
$indexBox = $('.indexes');
$slides.first().addClass("active");
$indexes.first().addClass("active");
$active = $('.slide.active');

var slideIndex = 0;

//function to slide through

function nextSlide(){
  $slides.eq(slideIndex).removeClass('active');
  $indexes.eq(slideIndex).removeClass('active');
  slideIndex += 1;
  if (slideIndex == $slides.length){
    slideIndex = 0;
  }
  $slides.eq(slideIndex).addClass('active');
  $indexes.eq(slideIndex).addClass('active');

  clearInterval(autoScroll);
  autoScroll = setInterval(nextSlide, 5000);
}

function prevSlide(){
  $slides.eq(slideIndex).removeClass('active');
  $indexes.eq(slideIndex).removeClass('active');
  slideIndex -= 1;
  if (slideIndex < 0){
    slideIndex = $slides.length-1;
  }
  $slides.eq(slideIndex).addClass('active');
  $indexes.eq(slideIndex).addClass('active');

  clearInterval(autoScroll);
  autoScroll = setInterval(nextSlide, 5000);
}

function selectSlide(event){
  $slides.eq(slideIndex).removeClass('active');
  $indexes.eq(slideIndex).removeClass('active');
  slideIndex = $indexes.index(event.target);
  $slides.eq(slideIndex).addClass('active');
  $indexes.eq(slideIndex).addClass('active');
}


$next.click(nextSlide);
$prev.click(prevSlide);
$indexBox.click(selectSlide);

autoScroll = setInterval(nextSlide, 5000);





/*excessive jQuery version
function nextSlide(){
  if ($slides.index($active) == $slides.length-1){
    $slides.eq($slides.length-1).removeClass('active');
    $indexes.eq($slides.length-1).removeClass('active');
    $slides.eq(0).addClass('active');
    $indexes.eq(0).addClass('active');
    $active = $('.slide.active');
  } else {
    $slides.eq($slides.index($active)).removeClass('active');
    $indexes.eq($slides.index($active)).removeClass('active');
    $slides.eq($slides.index($active)+1).addClass('active');
    $indexes.eq($slides.index($active)+1).addClass('active');
    $active = $('.slide.active');
  }
  clearInterval(autoScroll);
  autoScroll = setInterval(nextSlide, 5000);
}


function prevSlide(){
  if ($slides.index($active) == 0){
    $slides.eq($slides.length-1).addClass('active');
    $indexes.eq($slides.length-1).addClass('active');
    $slides.eq(0).removeClass('active');
    $indexes.eq(0).removeClass('active');
    $active = $('.slide.active');
  } else {
    $slides.eq($slides.index($active)).removeClass('active');
    $indexes.eq($slides.index($active)).removeClass('active');
    $slides.eq($slides.index($active)-1).addClass('active');
    $indexes.eq($slides.index($active)-1).addClass('active');
    $active = $('.slide.active');
  }
  clearInterval(autoScroll);
  autoScroll = setInterval(nextSlide, 5000);
}

function selectSlide(event){
  $slides.eq($slides.index($active)).removeClass('active');
  $indexes.eq($slides.index($active)).removeClass('active');
  $slides.eq($indexes.index(event.target)).addClass('active');
  $indexes.eq($indexes.index(event.target)).addClass('active');
}
*/
