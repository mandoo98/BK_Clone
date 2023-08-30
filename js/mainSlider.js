const swiper = new Swiper(".main_silder", {
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

// $('.swiper-slide').on('mouseover', function(){
//   swiper.stop();
// });
// $('.swiper-slide').on('mouseout', function(){
//   swiper.start();
// });