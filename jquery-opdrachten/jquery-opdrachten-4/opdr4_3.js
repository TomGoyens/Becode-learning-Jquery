$(document).ready(function() {
  namePattern = /[^a-z_-]/i;
  numPattern = /[\D]/;
  mailPattern = /[\w.]+@[\w.]+\.[\w]{2,4}$/i;
  function validate(){
    $validated = $('#validated');

    $validated.html("");

    var naam = $('#naam').val();
    var correctNaam = validateName(naam);
    if (!correctNaam){
      $validated.append("Please don't use any special characters in your name. </br>");
    }
    var voornaam = $('#voornaam').val();
    var correctVoornaam = validateName(voornaam);
    if (!correctVoornaam){
        $validated.append("Please don't use any special characters in your first name. </br>");
    }
    var email = $('#email').val();
    var correctEmail = validateEmail(email);
    if (!correctEmail){
        $validated.append("Please enter a valid email.</br>");
    }
    var telefoon = $('#telefoon').val();
    var correctTelefoon = validateNumber(telefoon);
    if (!correctTelefoon){
        $validated.append("Please enter a valid Number.</br>");
    }
    if (correctNaam == true && correctVoornaam == true && correctEmail == true && correctTelefoon == true){
      $validated.html("Thanks.");
    }

  }
  function validateName(naam){

    var validate = namePattern.test(naam);
    validate = !validate;
    return validate;


    /*
    for (var i = 0; i < naam.length; i++){
      if (validChar.indexOf(naam[i]) == -1){
        return false;
      }
    }
    return true;
    */
  }
  function validateEmail(email){
    var validate = mailPattern.test(email);
    console.log(validate);
    return validate;

    /*
    var validAt = email.indexOf('@');
    var validPoint = email.lastIndexOf(".");
    if (validAt > 0 && validAt < validPoint && validPoint != (email.length-1)){
      return true;
    }
    return false;
    */
  }
  function validateNumber(num){
    var validate = numPattern.test(num);
    validate = !validate;
    return validate;

    /*
    var numLength = num.length;//mss ooit checken of het nummer het goeie aantal ckaracters heeft
    for (var i = 0; i < numLength; i++){
      if (validNum.indexOf(num[i]) == -1){
        return false;
      }
    }
    return true;
    */
  }
  $('#register').click(validate);
});
