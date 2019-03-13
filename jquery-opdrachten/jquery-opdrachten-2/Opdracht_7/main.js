$(document).ready(function(){
  modlinks = $("#instructions");
    /* On click: Enlarge the font (120%) */
    modlinks.children().first().click(function(){
      $('#content').css('font-size', '1.2em');
    });
/*
    /* On click: Decrease the font size (80%) */
    modlinks.children().eq(1).click(function(){
      $('#content').css('font-size', '0.8em');
    });

    /* On click: Bold or normalize the green words */
    modlinks.children().eq(2).click(function(){
      $('.green').toggleClass('bold');
      $('.green').css('font-weight', '400');
      $('.bold').css('font-weight', 'bold');
    });

    /* On click: underline or normalize the words in red */
    modlinks.children().eq(3).click(function(){
      $('.red').toggleClass('underline');
      $('.red').css('text-decoration', 'none');
      $('.underline').css('text-decoration', 'underline');
    });

    /* On click: Replace the logo with another image */
    modlinks.children().eq(4).hover(function(){
      var img = $('#content img');
      if ( img.attr('src') == "images/jquery-logo.png"){
        img.attr('src', "images/koala.jpg");
      } else {
        img.attr('src', "images/jquery-logo.png");
      }
    });

    /* On hover: Display the URL of links in a tooltip when hovering over links */
    var links = $('a');
    var linkslinks = [];
    for (var i = 0; i < links.length; i++){
      links.eq(i).attr('title', links.eq(i).attr('href'));
    }

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    modlinks.children().eq(6).click(function(){
      var titles = $('#content h2');
      titles.eq(0).prepend("Chapter 1: ");
      titles.eq(1).prepend('Chapter 2: ');
    });

});
