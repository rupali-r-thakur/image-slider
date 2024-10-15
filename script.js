let slidImages = document.querySelectorAll("img");
console.log(slidImages);
let next = document.querySelector("#next");
let prev = document.querySelector(".prev"); let dots = document.querySelectorAll(".dot"); var counter = 0;
next.addEventListener("click", slideNext);
function slideNext() {
  slidImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slidImages.length-1) { counter = 0;} else {counter++;}
  slidImages[counter].style.animation = "next2 0.5s ease-in forwards"; indicators();}
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slidImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) { counter = slidImages.length - 1;} else {counter--;}
  slidImages[counter].style.animation = "prev2 0.5s ease-in forwards"; indicators();}
function autoSlider() {
  deletInterval = setInterval(timer, 1000);
  function timer() { slideNext();indicators();}} autoSlider();
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () { clearInterval(deletInterval);});
container.addEventListener("mouseout", autoSlider);
function indicators() {
  for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace("active", " ");}
  dots[counter].className += "active";}
function switchImage(currentImage) {
  currentImage.classList.add("active");
  var imageId = currentImage.getAttribute("attr");  
  if (imageId > counter) {
    slidImages[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageId;
    slidImages[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (imageId == counter) { return;
  } else {
    slidImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = imageId;
    slidImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  } indicators();}
