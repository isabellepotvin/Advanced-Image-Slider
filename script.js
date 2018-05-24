var milli = 5000;
var timeoutHandle;
var sliderIndex = 0;

var images = document.getElementsByClassName("slider-image");

var progressDivs = document.getElementsByClassName("slider-progressDiv");

function changeImage(n) {
  
   if(n == "p") {
     sliderIndex--;
   } else if (n == "n"){
     sliderIndex++;
   } else {
     sliderIndex = n;
   }
  
  if(sliderIndex >= images.length) {
    sliderIndex = 0;
  }
  else if(sliderIndex < 0) {
    sliderIndex = images.length - 1;
  }
  
  
  document.getElementById("progress-active").removeAttribute("id");
  
  document.getElementById("image-active").removeAttribute("id");
  
  images[sliderIndex].setAttribute("id", "image-active");
  progressDivs[sliderIndex].setAttribute("id", "progress-active");
  
  
}