/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
 // forEach method, could be shipped as part of an Object Literal/Module
// var forEach = function (array, callback, scope) {
//   for (var i = 0; i < array.length; i++) {
//     callback.call(scope, i, array[i]); // passes back stuff we need
//   }
// };
// document.querySelector('.card-flip').classList.toggle('flip')
let flipEls = document.querySelectorAll('div.card-flip');

for (const flipEl of flipEls){
  flipEl.addEventListener('touchstart', () => {
    flipEl.classList.remove('hover');
    flipEl.classList.toggle('flip');
  });
}

$("[data-toggle=popover]").popover({
  html : true,
  trigger: 'focus',
  content: function() {
    var content = $(this).attr("data-popover-content");
    return $(content).children(".popover-body").html();
  }
});
// flipEl.addEventListener('click', () => {
//   flipEl.classList.toggle('flip');
//   console.log("Flipped");
// });
// flipEl.addEventListener('ontouchstart', () => {
//   flipEl.classList.toggle('flip');
//   console.log("Flipped");
// });
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
