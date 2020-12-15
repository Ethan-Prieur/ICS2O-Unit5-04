var base1 = document.getElementById("math1").value;
var base2 = document.getElementById("math2").value;
var height = document.getElementById("math3").value;
function myFunction (base1, base2, height) {
  var result = (base1 + base2) * height / 2;
  document.getElementById("answer").innerHTML = result;
}
