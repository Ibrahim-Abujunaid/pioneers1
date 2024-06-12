document.addEventListener("DOMContentLoaded", function() {
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  // breakpoints: {
  //   1400: {
  //     slidesPerView: 4,
  //     spaceBetween: 20
  //   },
  //   992: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 50
  //   }
  // }
  
});

  // Get all swiper slides
  var swiperSlides = document.querySelectorAll('.swiper-slide');

  // Set initial flex property to each slide
  swiperSlides.forEach(function(slide) {
    slide.style.flex = '0 0 25%'; // Set all slides to take 1/4th of the container
  });

  // Get all divs with the 'first-property' class
  var propertyDivs = document.querySelectorAll('.first-property');

  // Add click event listener to each div
  propertyDivs.forEach(function(div, index) {
    div.addEventListener('click', function() {
      // Remove the 'expanded' class from all other divs
      propertyDivs.forEach(function(otherDiv) {
        if (otherDiv !== div) {
          otherDiv.classList.remove('expanded');
          otherDiv.parentElement.style.flex = '0 0 25%'; // Set other slides to take 1/4th of the container
        }
      });

      // Toggle the 'expanded' class on the clicked div
      div.classList.toggle('expanded');

      if (div.classList.contains('expanded')) {
        div.parentElement.style.flex = '0 0 100%'; // Set the clicked slide to take the full width (4 slides)
        document.querySelector('.down').style.height = '900px';
      } else {
        div.parentElement.style.flex = '0 0 25%'; // Set the clicked slide back to take 1/4th of the container
        document.querySelector('.down').style.height = '';
      }

      // Update Swiper to apply the changes
      swiper.update();

      // Slide to the clicked slide
      swiper.slideTo(index);
    });
  });
});
