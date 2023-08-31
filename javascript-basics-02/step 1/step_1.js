document.addEventListener("DOMContentLoaded", function(){
  var image = document.querySelector("#image1");
  var src_1="images/image1_2.jpg";
  image.addEventListener("mouseover", function(){
    image.src = src_1;
  });
} )