document.getElementById('btn').addEventListener('click', myFunction)
function myFunction () {
  let base1 = document.getElementById("math1").value;
  base1 = parseInt(base1)
  let base2 = document.getElementById("math2").value;
  base2 = parseInt(base2)
  let height = document.getElementById("math3").value;
  height = parseInt(height)
  let answer = (base1 + base2) * height / 2
  answer = parseInt(answer)
  alert(answer)
}
