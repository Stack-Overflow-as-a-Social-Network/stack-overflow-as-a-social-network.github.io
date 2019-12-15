const middle = document.querySelector(".middle");
const video1 = middle.querySelector(".middle video");
const text1 = middle.querySelector(".title");
//END SECTION
// const section = document.querySelector("section");
// const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: middle,
  triggerHook: 0
})
  .addIndicator()
  .setPin(middle)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text1, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
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

  video.currentTime = (delay);
}, 16.67);
