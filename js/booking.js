let bookingSpace = document.querySelector(".booking-hidden");
let bookingButton = document.querySelector(".booking-open");
let bookingForm = document.querySelector(".booking-form");

let arrivingDate = document.querySelector(".arriving-date-in");
let departureDate= document.querySelector(".departure-date-in");
let quantityAdult = document.querySelector(".adult");
let quantityChildren = document.querySelector(".children");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("quantity-person");
} catch (err) {
  isStorageSupport = false;
}

bookingButton.onclick = function(){
  bookingForm.classList.toggle('booking-hidden');
  bookingForm.classList.toggle('booking-form');
};

bookingForm.addEventListener("submit", function (evt){
  if(!quantityAdult){
    evt.preventDefault();
  } else {
     if (isStorageSupport) {
    localStorage.setItem("quantity-person", quantityAdult.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (bookingForm.classList.contains("booking-form")) {
      evt.preventDefault();
      bookingForm.classList.remove("booking-form");
      bookingForm.classList.add('booking-hidden');
    }
  }
});
