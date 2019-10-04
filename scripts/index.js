/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

let flipEl = document.querySelector('.card-flip');

if (flipEl.classList.contains('flip')) {
  flipEl.classList.remove('flip');
} else {
  flipEl.classList.add('flip');
}

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
