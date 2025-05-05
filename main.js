// window.addEventListener("load", function() {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden";
// });

// gsap.from('#uberbar', {opacity: 0, duration: 1, y: -50});
// gsap.from('.landing--img', {duration: 3, backgroundPosition: '0px -200px', opacity:0})
// gsap.from('#videobox1', {duration: 2, x:150, opacity:0})

var tl = gsap.timeline({defaults:{duration: 3}})
var sl = gsap.timeline({paused: true})
var text = gsap.timeline({paused: true})

// var logo = gsap.timeline({paused:true})


tl.from('.landing--img', {duration: 3.5, stagger: .2, opacity:0});
tl.from('#uberbar', {opacity: 0,  y: -50});
// tl.from('.landing--img', {height: '1vh'}, "-=6.1");
tl.from('#zlogo', {duration: 1, opacity: 0, x: -350,  ease: "power4.out"}, "=-4.8");
tl.from('#zsubtitle', {duration: 1, opacity: 0, x: 350,  ease: "power4.out"}, "=-5.1");
tl.from('.landing-img-png', {duration: 1, scale: 2.5, opacity: 0, x: 350,  ease: "back.out(1.7)"}, "=-5.1");




// logo.to('#zlogo', {duration: 1, opacity: 0, x: -350, y: -350, ease: "power4.out"});

// =================== video and text animation

// sl.from('#videobox1', {duration: 1.5, ease: "back.out(1.7)", x:150, opacity:0,});

// text.from(".heading--animation", { ease: "back.out(0.7)", y: 20, opacity:0, duration: 2});


// document.querySelector('.divider').addEventListener('mouseenter', letsAnimate);
// function letsAnimate() {
//     sl.play();
//     text.play();
    
// }


// new scrollmagic reveal photo
var controller = new ScrollMagic.Controller();

var animateIn = new TimelineMax();

animateIn
.fromTo(".overlay", 1,  {skewX:10, scale: 1.5}, {skewX: -10, xPercent:100,
transformOrigin: "0% 100%", ease: Power4.easeOut},)

.from(".heading--animation", { ease: "back.out(0.7)", y: -50, opacity:0, duration: 5}, "=-2.5")
.from(".heading--animation--two", { ease: "back.out(0.7)", y: -100, opacity:0, duration: 2}, "=-2.5")


// make scrollmgic scene
var scene = new ScrollMagic.Scene({
    triggerElement: ".picturetrigger"
})
.setTween(animateIn).addTo(controller);


// 2nd  scrollmagic reveal photo
var controllerTwo = new ScrollMagic.Controller();

var animateInTwo = new TimelineMax();

animateInTwo
.fromTo(".overlay-two", 2, {skewX:30, scale: 1.5}, {skewX: 0, xPercent:100,
transformOrigin: "0% 100%", ease: Power4.easeOut},)

.from(".heading--animation-b", { ease: "back.out(0.7)", y: -50, opacity:0, duration: 2}, "=-3.5")
.from(".heading--animation--two-b", { ease: "back.out(0.7)", y: -100, opacity:0, duration: 2}, "=-3.5")
// .to("body", { duration: 2, backgroundColor: "rgb(74, 74, 74)"}, "=-3.5")


// make scrollmgic scene
var sceneTwo = new ScrollMagic.Scene({
    triggerElement: ".picturetriggertwo"
})
.setTween(animateInTwo).addTo(controllerTwo);


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


// remove all hover on touchscreen
function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}




// input email form yt video
// $(document).ready(function () {
//     $ ('.submit').click(function (event){
//         event.preventDefault()
        

//         var email = $('.email').val()
//         var subject = $('.subject').val()
//         var message = $('.message').val()
//         var statusElm = $('.status')
//         statusElm.empty()

//         if(email.length > 5 && email.includes('@') && email.includes('.')) {
//             statusElm.append('<div>Email is valid</div>')
//         } else {
//             event.preventDefault()
//             statusElm.append('<div>Email is invalid</div>')
//         }

//         if(subject.length >= 2 ) {
//             statusElm.append('<div>Subject is valid</div>')
//         } else {
//             event.preventDefault()
//             statusElm.append('<div>Subject is invalid</div>')
//         }

//         if(message.length >= 5 ) {
//             statusElm.append('<div>Message is valid</div>')
//         } else {
//             event.preventDefault()
//             statusElm.append('<div>Message is invalid</div>')
//         }
//     })
// })

// from formspree
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }