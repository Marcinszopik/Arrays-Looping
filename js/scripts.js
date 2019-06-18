var myAnswer = function(num, digit) {
      if (num <= 1) {
        return "Beep!";
    } else if (num <= 2) {
        return "Boop!";
    } else if (num = 3) {
      return "I'm sorry, Dave. I'm afraid I can't do that.";
}};

$(document).ready(function() {
  $("form#my-Answer").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#num").val());
    var result = myAnswer(num);
    $("#result").text(result);
  });
});
