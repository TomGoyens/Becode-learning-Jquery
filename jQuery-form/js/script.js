// Solution goes here
$(document).ready(function() {
  var $pass = $('#pass');
  var $passC = $('#pass-confirm');
  var $mail = $('#email');
  var $name = $('#display-name');
  var $send = $('#send');
  var $reset = $('#reset');
  var $mistake = $('#mistake');
  var mailPattern = /^[\w][\w.]+[\w]@[\w.]+\.[\w]{2,4}$/i;
  var doubleDot = /\.{2,}/;
  var namePattern = /[\W]/i;
  var passPattern = /[^\w\d!().\[\]?_~`;:@#$%^&*+=-]/;
  var check1 = false;
  var check2 = false;
  var check3 = false;
  var maxChar = 12;
  $name.after("<span class=\"nameComment\"></span>");
  $pass.after("<span class=\"passComment\"></span>");
  $mail.after("<span class=\"mailComment\"></span>");
  $namecomment = $('.nameComment');
  $comment = $('.passComment');
  $mailcomment = $('.mailComment');

  function clearInput(){
    $pass.val("");
    $passC.val("");
    $mail.val("");
    $name.val("");
    $pass.css('border','1px solid #ccc');
    $passC.css('border','1px solid #ccc');
    $mail.css('border','1px solid #ccc');
    $name.css('border','1px solid #ccc');
    $mistake.css('display', 'none');
  }

  function nameCheck($name){
  $namecomment.html("");
  $namecomment.css('display', 'block');
    if ($name.val().length < 5){
      $name.css('border', "4px solid red");
      $mistake.css('display', 'block');
      $namecomment.append(" • Name requires at least 5 characters.");
    } else if ($name.val().length > maxChar) {
      $name.css('border', "4px solid red");
      $mistake.css('display', 'block');
      $namecomment.append(" • Please use less than " + maxChar + " characters.");
    } else if (namePattern.test($name.val())){
      $name.css('border', "4px solid red");
      $mistake.css('display', 'block');
      $namecomment.append(" • Please don't use special characters.");
    } else {
      $name.css('border', "4px solid green");
      $namecomment.css('display', 'none');
      return true;
    }
  }

  function passCheck($pass, $passC){
    $comment.html("");
    $comment.css('display', 'block');
    if ($pass.val().length < 5){
      $pass.css('border', "4px solid red");
      $passC.css('border', "4px solid red");
      $mistake.css('display', 'block');
      $comment.append("• Password requires at least 5 characters.");
    } else if($name.val().length > maxChar){
      $pass.css('border', "4px solid red");
      $passC.css('border', "4px solid red");
      $mistake.css('display', 'block');
      $comment.append("• Password has to be less than 5 characters.");
    } else if(passPattern.test($pass.val())){
      $pass.css('border', "4px solid red");
      $passC.css('border', "4px solid red");
      $mistake.css('display', 'block');
      $comment.append("• Please only use the allowed characters.");
    } else {
        if ($pass.val() == $passC.val()){
        $pass.css('border', "4px solid green");
        $passC.css('border', "4px solid green");
        var passstr = 0;
        var passComment = "";
        if ($pass.val().length > 10){
          passstr += 1;
        } else {
          passComment += " • Try making it longer.<br>";
        }
        if (/[\W]/.test($pass.val())){
          passstr += 1;
        } else {
          passComment += " • Try adding special characters ( ().[]?_~`;:@#$%^&*+=- ).<br>";
        }
        if (/[a-z]/.test($pass.val())){
          passstr += 1;
        } else {
          passComment += " • Try adding lower case characters?<br>";
        }
        if (/[A-Z]/.test($pass.val())){
          passstr += 1;
        } else {
          passComment += " • Try adding capital letters?<br>";
        }
        if (/[\d]/.test($pass.val())){
          passstr += 1;
        } else {
          passComment += " • Try adding some numbers?<br>";
        }
        console.log(passstr);
        if (passstr == 1){
          $comment.html("You password strength is: Meh...<br>" + passComment);
        } else if (passstr == 2){
          $comment.html("You password strength is: Ok.<br>" + passComment);
        } else if (passstr == 3){
          $comment.html("You password strength is: Allmost good...<br>" + passComment);
        } else if (passstr == 4){
          $comment.html("You password strength is: Good one!<br>" + passComment);
        } else if (passstr == 5){
          $comment.html("You password strength is: Fantastic!<br>" + passComment);
        }

        return true;
      } else {
        $pass.css('border', "4px solid red");
        $passC.css('border', "4px solid red");
        $comment.html(" • Your password and confirmation don't match");
      }
    }
  }

  function mailCheck($mail){
    $mailcomment.html("");
    $mailcomment.css("display", "block");
    var check = mailPattern.test($mail.val());
    if (check && doubleDot.test($mail.val()) == false){
      $mail.css('border', "4px solid green");
      $mailcomment.css("display", "none");
      return true;
    } else {
      $mail.css('border', "4px solid red");
      $mistake.css('display', 'block');
      $mailcomment.html(" • Please enter a valid email adress.");
    }
  }

  function checknSend(event){
    event.preventDefault(event);
    check1 = nameCheck($name);
    check2 = passCheck($pass, $passC);
    check3 = mailCheck($mail);
    if (check1 && check2 && check3){
      $mistake.css('display', 'none');
    }

  }

  $send.click(checknSend);
  $reset.click(clearInput);
});
