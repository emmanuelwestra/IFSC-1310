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
    // Initial animations for counters
    animateCounter('num-46', 0, 46, 2300);
    animateCounter('num-41', 0, 41, 2050);
    animateCounter('num-25', 0, 25, 1250);

    // Selection and mix-blend-mode logic
    const textElements = document.querySelectorAll('#hero-section-history h1, #hero-section-history p');

    function updateBlendMode() {
        const selection = window.getSelection();
        // Check if the selection is not empty and is within the text elements
        textElements.forEach(element => {
            if (selection.containsNode(element, true)) {
                // Apply 'normal' blend mode if the selection is within the element
                element.style.mixBlendMode = 'normal';
            } else {
                // Revert to 'difference' blend mode
                element.style.mixBlendMode = 'difference';
            }
        });
    }

    document.addEventListener('selectionchange', updateBlendMode);
});