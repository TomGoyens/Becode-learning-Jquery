$(document).ready(function() {

  var $play = $('#play');
  var rps = ["rock", "paper", "sissors"];

  var $message = $('#message');
  var $dialoge = $('#dialoge');
  var $count = $('#count');

  var victoryCount = 0;
  var lossCount = 0;
  var tieCount = 0;
  var total = 0;

  $play.click(function(){
    var $choice = $('input[name=rps]:checked').val();

    var rand = Math.floor(Math.random()*3);
    var win = false;
    var tie = false;

    console.log(rand);

    switch (rand) {
      case 0:
          $dialoge.html("The computer picks " + rps[0]);
          if ($choice == rps[1]){
          win = true;
        } else if ($choice == rps[0]){
          tie = true;
        }
        break;
      case 1:
        $dialoge.html("The computer picks " + rps[1]);
        if ($choice == rps[2]){
          win = true;
        } else if ($choice == rps[1]){
          tie = true;
        }
      break;
      case 2:
        $dialoge.html("The computer picks " + rps[2]);
        if ($choice == rps[0]){
          win = true;
        } else if ($choice == rps[2]){
          tie = true;
        }
        break;
    }

    if (win){
      victoryCount += 1;
      $message.html("you won");
    } else if (tie) {
      tieCount += 1;
      $message.html("it's a tie");
    } else {
      lossCount += 1;
      $message.html("Haha, you lose!");
    }
    total = victoryCount+lossCount+tieCount;

    $count.html("You have won " + victoryCount + " times (" + ((victoryCount/total)*100).toFixed(2) + "%), lost " + lossCount + " times (" + ((lossCount/total)*100).toFixed(2) + "%), and had " + tieCount +  " ties (" + ((tieCount/total)*100).toFixed(2) + "%) for a total of " + (victoryCount+lossCount+tieCount) + " games, grats.");
  });
});
