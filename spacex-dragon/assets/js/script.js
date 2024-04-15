/* function design obtained from https://codepen.io/quentindigital/pen/BapazMy */
jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 20;
      mouseY = e.pageY - 20; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#cursor").css({left: xp +'px', top: yp +'px'});
    }, 20);
  
  });

  function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, step);
}

document.addEventListener('DOMContentLoaded', function() {
    animateCounter('num-46', 0, 46, 2300);
    animateCounter('num-41', 0, 41, 2050);
    animateCounter('num-25', 0, 25, 1250);
});