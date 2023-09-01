document.addEventListener("DOMContentLoaded", function () {
  var password = document.querySelector("#password");
  var confirmation = document.querySelector("#confirmation");
  var button = document.querySelector("button");
  button.addEventListener("click", function () {
    var password_value = password.value;
    var confirmation_value = confirmation.value;
    if (password_value !== confirmation_value) {
      confirmation.style.borderBlockColor = "red";
      password.style.borderBlockColor = "red";
    }
  });
});
