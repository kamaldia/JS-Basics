
document.addEventListener("DOMContentLoaded",function(){
var division = document.querySelector("#division");
var input_1 = document.querySelector("#name");
input_1.addEventListener("input", function() {
division.textContent = input_1.value;
}); });