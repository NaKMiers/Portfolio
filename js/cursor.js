import animejs from 'https://cdn.skypack.dev/animejs@3.2.1'

function move({ clientX: x, clientY: y, target }) {
   let scale = 1

   if (target && target.classList && target.classList.contains('link')) {
      scale = 1.75
   }

   const cursorElement = animejs({
      targets: '.cursor',
      translateX: Math.floor(x),
      translateY: Math.floor(y),
      rotate: x / -8 + 135,
      scale,
      easing: 'easeOutElastic(1, 1)',
   })
}

window.addEventListener('mousemove', move)

window.onload = () =>
   animejs({
      targets: '.cursor',
      opacity: 1,
   })
