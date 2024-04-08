/* function design obtained from https://codepen.io/quentindigital/pen/BapazMy */
jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 20;
      mouseY = e.pageY - 40; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#cursor").css({left: xp +'px', top: yp +'px'});
    }, 20);
  
  });