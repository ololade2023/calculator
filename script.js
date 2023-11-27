// This function clears all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function displays the values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

// input form
const fullName = document.querySelector("#name");
const checkName = document.querySelector("#btn-check");
checkName.addEventListener("click", () => {
  const name = fullName.value;
  const validName = name.split(" ");
  if (validName.length !== 3) {
    alert("Your full name must be three words long");
  } else {
    alert(`Welcome ${validName[1]}`);
  }
});
