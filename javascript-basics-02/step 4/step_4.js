document.addEventListener("DOMContentLoaded", function(){
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");
  var city = document.getElementById("city");
  var button = document.querySelector("button");
    button.addEventListener("click", function(){
    var confirmed = confirm("Are you sure to reset?");
    if(confirmed) {
    name.value = "" ; 
    surname.value = "" ;  
    city.value = "" ;
    };
  })

 });