function solve() {
  var age = document.getElementById("input").value;
  if (age >= 65) {
    document.getElementById("output").innerHTML =
      "You will receive a senior discount";
  } else if (age <= 12) {
    document.getElementById("output").innerHTML =
      "You will receive a child discount.";
  } else {
    document.getElementById("output").innerHTML =
      "You will pay regular price. No discount.";
  }
}
