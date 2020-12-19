new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

// navigation physics

const { styler, spring, listen, pointer, value } = window.popmotion;

const emoji = document.querySelector('.brand');
const divStyler = styler(emoji);
const emojiXY = value({ x: 0, y: 0 }, divStyler.set);

listen(emoji, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(emojiXY.get()).start(emojiXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: emojiXY.get(),
      velocity: emojiXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 500,
      mass: 1,
      damping: 10
    }).start(emojiXY);
  });