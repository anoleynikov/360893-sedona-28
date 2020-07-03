let bookingSpace = document.querySelector(".booking-hidden");
let bookingButton = document.querySelector(".booking-open");
var bookingForm = document.querySelector(".booking-form");
let bookingFind = document.querySelector(".find");

var arrivingDate = bookingForm.querySelector(".arriving-date-in");
var departureDate= bookingForm.querySelector(".departure-date-in");
var quantityAdult = bookingForm.querySelector(".adult");
var quantityChildren = bookingForm.querySelector(".children");

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
  if (!quantityAdult.value|| !departureDate.value || !arrivingDate.value){
    evt.preventDefault();
    bookingForm.classList.remove("booking-error");
    bookingForm.offsetWidth = bookingForm.offsetWidth;
    bookingForm.classList.add("booking-error");
    alert("Введите данные для поиска");
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
      bookingForm.classList.remove("booking-error");
    }
  }
});
