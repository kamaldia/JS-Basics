document.addEventListener("DOMContentLoaded", function () {
  var show = document.querySelector("#show");
  var hide = document.querySelector("#hide");
  var para = document.querySelector("#texte");
  show.addEventListener("click", function () {
    para.style.display = "block" ;
  });
  hide.addEventListener("click", function() {
    para.style.display = "none" ;
  });
})