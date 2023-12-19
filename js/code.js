
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});
let span = document.querySelector(".up");
window.onscroll=function(){
  if(this.scrollY >= 600){
    span.classList.add("show");
  }else{
    span.classList.remove("show");
  }
}



