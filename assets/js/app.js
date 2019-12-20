const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector(".title");
const text2 = intro.querySelector(".desp");
const text3 = intro.querySelector("h5");
//END SECTION
// const section = document.querySelector("section");
// const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 2800,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

const textAnim1 = TweenMax.fromTo(text2, 3, { opacity: 0 }, { opacity: 1 });

let scene3 = new ScrollMagic.Scene({
  duration: 1000,
  offset: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim1)
  .addTo(controller);

const textAnim2 = TweenMax.fromTo(text3, 2, { opacity: 0 }, { opacity: 1});

let scene4 = new ScrollMagic.Scene({
  duration: 1000,
  offset: 2000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim2)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);

  // video.currentTime = (delay);
}, 16.67);
