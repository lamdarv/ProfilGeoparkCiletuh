function animation({ duration, draw, timing }) {
  let begin = performance.now();

  reqAnimationFrame(function animation(time) {
    let timeFraction = (time - begin) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    let progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      reqAnimationFrame(animation);
    }
  });
}

$(document).ready(function () {
  var navigating = false,
    curPage = 1,
    pages = $(".section").length;

  function magicStuff(paramPage) {
    if (paramPage) curPage = paramPage;
    navigating = false;
    var calculatedMargin = 0 - (curPage - 1) * 100;
    $(".mainpage").css("margin-top", calculatedMargin + "vh");
    console.log("magic");
  }

  function trickyStuff(page) {
    $(".content").css({
      "transition-duration": "0s",
      "transition-delay": "0s",
    });
    $(".main").css("top");
    magicStuff(page);
    $(".main").css("top");
    $(".content").css("transition-duration", "0.8s");
  }

  function navigateUp() {
    if (curPage > 1) {
      curPage--;
      magicStuff();
    }
  }

  function navigateDown() {
    if (curPage < pages) {
      curPage++;
      magicStuff();
    }
  }

  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (!navigating) {
      console.log(curPage);
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    }
  });
});
