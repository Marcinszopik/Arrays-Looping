function myFunction() {
  var answers = ["No Clue", "Beep", "Boop", "I'm Sorry Dave. I'm afraid I can't do that"];
  var text = "";
  var i;
  for (i = 0; i < answers.length; i++) {
    text += answers[i] + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}
