var box = $('.square');
var area = $('.squareSpace');
var html = $('html');

var posy = box.position().top;
var posx = box.position().left;
var xmax = area.width()-box.width();
var ymax = area.height()-box.height();

html.keydown(function(event){
  if (event.which == 37){
    //left
    if (posx > 0){
      posx -= 10;
    } else {
      posx = xmax;
    }
  } else if (event.which == 38) {
    //up
    if (posy > 0){
      posy -= 10;
    } else {
      posy = ymax;
    }
  } else if (event.which == 39) {
    //right
    if (posx < xmax){
      posx += 10;
    } else {
      posx = 0;
    }
  } else if (event.which == 40) {
    //down
    if (posy < ymax){
      posy += 10;
    } else {
      posy = 0;
    }
  }

  box.css('left', posx);
  box.css('top', posy);
});
