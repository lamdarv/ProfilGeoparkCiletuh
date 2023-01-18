document.querySelectorAll(".leftContent img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".pop-up-map").style.display = "block";
    document.querySelector("pop-up-map img").src = image.getAttibute("src");
  };
});

document.querySelector(".pop-up-map span").onclick = () => {
  document.querySelector(".pop-up-map").style.display = "none";
};

document.querySelectorAll(".leftContentPage5 img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".pop-up-map-page5").style.display = "block";
    document.querySelector("pop-up-map-page5 img").src =
      image.getAttibute("src");
  };
});

document.querySelector(".pop-up-map-page5 span").onclick = () => {
  document.querySelector(".pop-up-map-page5").style.display = "none";
};

const animate1 = document.getElementById("animate1");
const animate2 = document.getElementById("animate2");
const animate3 = document.getElementById("animate3");
const animate4 = document.getElementById("animate4");
const animate5 = document.getElementById("animate5");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    fadeIn(animate1);
  }, 0);
  setTimeout(() => {
    fadeIn(animate2);
  }, 600);
  setTimeout(() => {
    fadeIn(animate3);
  }, 1200);
  setTimeout(() => {
    fadeIn(animate4);
  }, 1500);
  setTimeout(() => {
    fadeIn(animate5);
  }, 2000);
});

function fadeIn(element, duration = 1000) {
  element.style.display = "";
  element.style.opacity = 0;
  let last = +new Date();
  let tick = function () {
    element.style.opacity =
      +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();
    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };
  tick();
}

document.querySelectorAll(".melange-txt").forEach((text) => {
  text.onclick = () => {
    idname = $(text).attr("id");
    document.querySelector("#" + idname + "-pop").style.display = "flex";
    document.querySelector("#" + idname + "-pop").style.zIndex = "4";
    document.querySelector("#" + idname + "-pop").style.opacity = "1";
  };
});

document.querySelectorAll(".popup-container a").forEach((button) => {
  button.onclick = () => {
    idname = $(button).attr("id");
    document.querySelector("#" + idname + "-pop").style.display = "none";
    document.querySelector("#" + idname + "-pop").style.zIndex = "0";
    document.querySelector("#" + idname + "-pop").style.opacity = "0";
  };
});
