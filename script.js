// LOADER START

let loadTimer = document.querySelector("#line1-part1 #one");

// gsap.timeline() is used when you want to sequence multiple animations in a precise and controllable timeline, rather than triggering them individually.

let tl = gsap.timeline();


// your web experience loading right wala part
tl.from(".lines h1", {     
    y: 150,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.3
});


// now
tl.from(".lines h2", {
    opacity: 0,
    y: 150,
    duration: 0.7
}, "-=0.7");

tl.to(".lines h2", {
    opacity: 1,
    animationName: "anime"


})


// 00-100 and now
tl.from("#line1-part1, .lines h2", {
    opacity: 0,
    onStart: function(){      
        
             // onStart is a callback function that gets triggered right when an animation starts. onStart fires exactly when the animation or timeline starts playing

             // onComplete runs once when the animation (or a particular tween in a timeline) finishes playing.

        let grow = 0;
        setInterval(function(){
            if(grow < 100){
                loadTimer.innerHTML = grow++;   
            }
            else{
                loadTimer.innerHTML = grow;
            }
        }, 25);
    }
})


//pura complete loader
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.3,       // delay utna do jitne me timer pura load ho jaye 
       // loader ko hatana h layout se "opacity: 0 "se to bs invisible hua h..."display: none" se layout se hi hat jayega
})


// page1 ko niche se upar lana h
tl.from("#page1", {
    y: 1600,
    opacity: 0,
    delay: 0.2,
    ease: Power4,
    duration: 0.5,
})

tl.to("#loader", {
    display: "none"
})



