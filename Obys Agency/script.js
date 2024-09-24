function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1, .line h2", {
    opacity: 0,
  });

  tl.to("#line1-part1", {
    opacity: 1,
    onStart: function () {
      /* START */
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;

      var counterInterval = setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
          clearInterval(counterInterval);
        }
        console.log(grow);
      }, 25);

      /* END */
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease: Power4,
    duration: 0.5,
  });

  tl.to("#loader", {
    display: "none",
  });
}

loadingAnimation();
