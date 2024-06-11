// Declare the Swiper instance variable outside the function scope
var swiper;

// Function to initialize Swiper
function initSwiper() {
  swiper = new Swiper('.swiper-container', {
    breakpoints: {
      // when window width is <= 1806px
      1400: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 50
      },
     
    pagination: {
      el: '.swiper-pagination',
      reverseDirections: true,
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      // You can add more breakpoints here if needed
    }
  });
}

const slide_elements = document.querySelectorAll('.first-property');

slide_elements.forEach(element => {

  
  element.addEventListener('click', (e) => {
    console.log(e.currentTarget);
  });
});

function expandDiv(element) {

// console.log(element.closest('.swiper-slide'));  

element.closest('.swiper-slide').style.width = "100%";  

element.classList.toggle('expanded');

return false;

  


  // if (element.classList.contains('expanded')) {
  //   // If expanded, show only 1 slid e
  //   swiper.params.slidesPerView = 1;
  // } else {
  //     swiper.params.slidesPerView = 4;
    
  // }

  // Update Swiper to reflect the changes
  swiper.update();
}

// Initialize Swiper when the document is ready
document.addEventListener("DOMContentLoaded", function() {
  initSwiper();
});
