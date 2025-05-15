//LOADER
function loadingAnimation() {
  let loadTimer = document.querySelector("#line1-part1 #one");

  // gsap.timeline() is used when you want to sequence multiple animations in a precise and controllable timeline, rather than triggering them individually.

  let tl = gsap.timeline();

  // your web experience loading right wala part
  tl.from(".lines h1", {
    y: 150,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.3,
  });

  // now
  tl.from(".lines h2", {
      opacity: 0,
      y: 150,
      duration: 0.7,
    }, "-=0.7"        // is animation ko previous animation ke end hone se 0.7 seconds pehle start karo
  );

  tl.to(".lines h2", {
    opacity: 1,
    animationName: "anime",
  });

  // 00-100 and now
  tl.from("#line1-part1, .lines h2", {
    opacity: 0,
    onStart: function () {
      // onStart is a callback function that gets triggered right when an animation starts. onStart fires exactly when the animation or timeline starts playing

      // onComplete runs once when the animation (or a particular tween in a timeline) finishes playing.

      let grow = 0;
      setInterval(function () {
        if (grow < 100) {
          loadTimer.innerHTML = grow++;
        } else {
          loadTimer.innerHTML = grow;
        }
      }, 25);
    },
  }, "-=0.4");

  //pura complete loader
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.7, // delay utna do jitne me timer pura load ho jaye
  });

  // page1 ko niche se upar lana h
  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    delay: 0.4,
    ease: Power4,
    duration: 0.9,
  });

  // loader ko hatana h taki page 1 aa sake
  tl.to("#loader", {
    display: "none", // loader ko hatana h layout se "opacity: 0 "se to bs invisible hua h..."display: none" se layout se hi hat jayega
  });

  // page1 ka nav ki entry ka animation
  tl.from("#nav", {
    opacity: 0,
  });

  // page1 k headline text (.hero) ka animation
  tl.from("#hero1, #hero2, #hero3, #hero4", {
    y: 120,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
  });
}
// loadingAnimation();

// CURSOR
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    //dets = details -> It automatically receives an "event object", which contains a lot of information about the mouse event that just happened.

    gsap.to("#cursor", {
      left: dets.x, // cursor element ko horizontally usi jgha le ja rha h jahan mouse ka x-coordinate h.

      top: dets.y, // cursor element ko vertically usi jgha le ja rha h jahan mouse ka y-coordinate h.
    });
  });

  // WORkS ABOUT CONTACTS - Cursor magnet effect
  Shery.makeMagnet("#nav-part2 h4");
}
cursorAnimation();
