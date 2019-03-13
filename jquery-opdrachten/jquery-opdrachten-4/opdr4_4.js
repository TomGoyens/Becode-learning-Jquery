$(document).ready(function() {
  function generate(){
    $biography = $('#biography');
    naam = $('#naam').val();
    voornaam = $('#voornaam').val();
    datum = $('#birthDate').val();
    plaats = $('#birthPlace').val();
    werk = $('#work').val();

//    biography = ('%s %s, Geboren op %s in %s, momenteel een %s.', naam, voornaam, datum, plaats, werk);

    $biography.html(naam + " " + voornaam +", Geboren op " + datum + " in " + plaats + ", momenteel een " + werk +".");
  }

  $('#generate').click(generate);
});
