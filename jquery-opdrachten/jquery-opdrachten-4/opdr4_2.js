$(document).ready(function() {


  function calculate(){
    var bruto = $('#salaris').val();
    var geslacht = $('form input[name=geslacht]:checked').val();
    var kinder = parseInt($('#kinderen').val());
    var uitgaven = $('#uitgaven').val();
    var verzekering = $('#verzekering').val();
    var bijdragen = $('#bijdragen').val();
    var vrouwenKorting = $('#vrouwenKorting');
    var drieKinderKorting = $('#drieKinderKorting');
    var vierKinderKorting = $('#vierKinderKorting');
    var netto = 0;
    var spending = 0;

    vrouwenKorting.val(0);
    drieKinderKorting.val(0);
    vierKinderKorting.val(0);

    spending = bruto * ((uitgaven/100) + (verzekering/100) + (bijdragen/100));

    if (geslacht == 'vrouw'){
      vrouwenKorting.val((spending * 0.02).toFixed(2));
    }
    if (kinder == 3){
      drieKinderKorting.val((spending * 0.01).toFixed(2));
    }
    if (kinder > 3){
      vierKinderKorting.val((spending * 0.02).toFixed(2));
    }

    spending -= parseInt(vrouwenKorting.val()) + parseInt(drieKinderKorting.val()) + parseInt(vierKinderKorting.val());

    netto = bruto - spending;

    $('#inkomst').val(netto.toFixed(2));

  }

  $('#calculate').click(calculate);

});
