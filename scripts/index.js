/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

let flipEl = document.querySelector('.card-flip');

flipEl.addEventListener('click', () => {
  flipEl.classList.toggle('flip');
  console.log("Flipped");
});
flipEl.addEventListener('ontouchstart', () => {
  flipEl.classList.toggle('flip');
  console.log("Flipped");
});
/*
 * Holder.js for demo image
 * Just for demo purpose
 */
// Holder.addTheme('gray', {
//   bg: '#777',
//   fg: 'rgba(255,255,255,.75)',
//   font: 'Helvetica',
//   fontweight: 'normal'
// });
