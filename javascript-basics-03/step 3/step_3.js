document.addEventListener("DOMContentLoaded", function () {
  var red = document.querySelector(".red");
  var green = document.querySelector(".green");
  var blue = document.querySelector(".blue");
  var para = document.querySelector("p");
red.addEventListener("click", function(){
  para.style.color = "red";
});
blue.addEventListener("click", function(){
  para.style.color = "blue";
});
green.addEventListener("click", function(){
  para.style.color = "green";
});
})