window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

// gsap.from('#uberbar', {opacity: 0, duration: 1, y: -50});
// gsap.from('.landing--img', {duration: 3, backgroundPosition: '0px -200px', opacity:0})
// gsap.from('#videobox1', {duration: 2, x:150, opacity:0})

var tl = gsap.timeline({defaults:{duration: 3}})
var sl = gsap.timeline({paused: true})
var text = gsap.timeline({paused: true})
// var logo = gsap.timeline({paused:true})


tl.from('.landing--img', {duration: 3, stagger: .2, backgroundPosition: '0px -200px', opacity:0});
tl.from('#uberbar', {opacity: 0,  y: -50});
tl.from('.landing--img', {height: '1vh'}, "-=6.1");
tl.from('#zlogo', {duration: 5, opacity: 0, x: -350, y: -350,  ease: "power4.out"}, "=-3.8");

// logo.to('#zlogo', {duration: 1, opacity: 0, x: -350, y: -350, ease: "power4.out"});

// =================== video and text animation

// sl.from('#videobox1', {duration: 1.5, ease: "back.out(1.7)", x:150, opacity:0,});

// text.from(".heading--table", {rotation: -37, ease: "back.out(0.7)", y: 500, opacity:0, duration: 1});


// document.querySelector('.divider').addEventListener('mouseenter', letsAnimate);
// function letsAnimate() {
//     sl.play();
//     text.play();
    
//     }

    // =================== video and text animation above

// document.querySelector('.dividerone').addEventListener('mousover', letsAnimateLogo);
// function letsAnimateLogo() {

//     logo.play();
// }

// scroll animation

// var tlscroll = new TimelineMax({onUpdate:updatePercentage});
// var tlscroll = gsap.timeline({onUpdate:updatePercentage})
// const controller = new ScrollMagic.Controller(); 

// second timeline scroll
// var tlscroll2 = gsap.timeline({defaults:{duration: 5}})

// tlscroll.from("blockquote", 1,{x:200, opacity: 0});
// tlscroll.from("span", 1,{width: 0}, "=-.5");
// tlscroll.from("#alley", 3, {x:100,  ease: "back.out(1.7)", opacity: 0});
// tlscroll.from("#hallway", 1,{x:200,  ease: "back.out(1.7)", width: "1%", opacity: 0});


// tlscroll2.from("#box", 1, {opacity: 0, scale: 0});
// tlscroll2.to("#box", 3, {
//     left: "20%",
//     scale: 2,
//     borderColor: 'dark gray',
//     backgroundColor: 'gray',
    
//     borderWidth: 1,
//     boxShadow: '1px 2px 0px rgba(0,0,0, .09)',
//     zIndex: '-1'
//     });

// const scene = new  ScrollMagic.Scene({
//     triggerElement: ".sticky",
//     triggerHook: "onLeave",
//     duration: "100%"
// })
//    .setPin(".sticky")
//    .setTween(tlscroll)
//    .addTo(controller);

// function updatePercentage() {
//     tl.progress();
//     console.log(tl.progress());
// }

// 2nd scrollmagic scene

// const scene2 = new  ScrollMagic.Scene({
//     triggerElement: "blockquote"
// })
//     .setTween(tlscroll2)
//     .addTo(controller);
