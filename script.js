//your JS code here. If required.
function convertToUppercase() {
  const input = document.getElementById("fname");
  input.value = input.value.toUpperCase();
}

// Attach event when input loses focus
document.getElementById("fname").addEventListener("blur", convertToUppercase);