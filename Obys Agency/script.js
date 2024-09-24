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

tl.to("#line1-part1, .line h2", {
  opacity: 1,
  onStart: function () {
    /* START - 
Timer for the Loader */
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

tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 4,
});
