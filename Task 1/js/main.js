// map 
function initMap() {
    const coord = { lat: 28.7042, lng: 77.1025 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: coord,
      mapId: "efffb52a8e985f64",
    });
    const marker = new google.maps.Marker({
      position: coord,
      map: map,
    });
} 


// video slider
var swiper = new Swiper('.video-slider', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
});

// clients/brands slider
var swiper = new Swiper('.brand-slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      450: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      1200: {
          slidesPerView: 5,
      },
  }
});
