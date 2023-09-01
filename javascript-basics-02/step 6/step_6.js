document.addEventListener("DOMContentLoaded", function(){
var images = document.querySelectorAll("img");
for(let image in images){
  images[image].addEventListener("mouseover",function(){
    images[image].setAttribute("src",`images/image${+image+1}_2.jpg`);
  })
    images[image].addEventListener("mouseout",function(){
    images[image].setAttribute("src",`images/image${+image+1}.jpg`);
  });
}})