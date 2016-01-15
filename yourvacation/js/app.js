$('#blanks form').submit(function(event) {







  var question1Input = $("input#question1").val();
  var question2Input = $("input#question2").val();
  var question3Input = $("input#question3").val();
  var question4Input = $("input#question1question4").val();
  var question5Input = $("input#question5").val();
$('.question1').text(question1Input);
$('.question2').text(question2Input);
$('.question3').text(question3Input);
$('.question4').text(question4Input);
$('.question5').text(question5Input);

})
