const textShake = document.getElementById("text-shake");

setInterval(() => {
  shake(textShake, 550, 200, 2000);
}, 1000);
function shake(
  e,
  top,
  left,
  time = 500,
  isTop = true,
  distance = 5,
  oncomplete
) {
  var time = time;
  var distance = distance;

  var start = new Date().getTime();
  animate();

  function animate() {
    var now = new Date().getTime();
    var elapsed = now - start;
    var fraction = elapsed / time;

    // What fraction of total time?
    if (fraction < 1) {
      var x = distance * Math.sin(fraction * 4 * Math.PI);
      if (isTop == true) {
        e.style.top = x + top + "px";
      }
      e.style.left = x + left + "px";

      // We're aiming for a smooth 40 frames/second animation.
      setTimeout(animate, Math.min(1, time - elapsed));
    } else {
      // Otherwise, the animation is complete
      if (oncomplete) oncomplete(e);
      // Invoke completion callback
    }
  }
}

// var width = window.screen.width;
// var womanLeft = document.getElementById("woman-left");
// var womanRight = document.getElementById("woman-right");
// //   var posY = 0;
// var posX = 300;

// function womanmove() {
//   womanLeft.setAttribute("style", "top:580px;left:" + posX + "px;");
//   womanRight.setAttribute("style", "top:580px;right:" + posX + "px;");
//   posX++;
//   if (posX >= width / 2 - 85) {
//     clearInterval(t);
//   }
// }
// var t = setInterval(womanmove, 10);
