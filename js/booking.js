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
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

bookingButton.onclick = function(){
  bookingForm.classList.toggle('booking-hidden');
  bookingForm.classList.toggle('booking-form');
};


bookingForm.addEventListener("submit", function (evt) {
   if (!arrivingDate.value || !departureDate.value||quantityAdult.value||quantityChildren.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("arriving", arrivingDate.value);
    localStorage.setItem("departure", departureDate.value);
    localStorage.setItem("adults", quantityAdult.value);
    localStorage.setItem("children", quantityChildren.value);

  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (bookingForm.classList.contains("booking-form")) {
      evt.preventDefault();
      bookingForm.classList.remove("booking-form");
    }
  }
});
