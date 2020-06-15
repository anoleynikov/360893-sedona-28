let bookingForm = document.querySelector(".booking-hidden");
console.log('нашел 1');
let bookingButton = document.querySelector(".booking-open");
console.log('нашел 2');
bookingButton.onclick = function(){
  bookingForm.classList.toggle('booking-form');
  bookingForm.classList.toggle('booking-hidden');
};
