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

const playStopBtn = document.querySelector('.swiper-playStop');

playStopBtn.addEventListener('click',function(){
  playStopBtn.classList.toggle('stop');
  if(playStopBtn.classList.contains('stop')){
    swiper.autoplay.stop()
  } else {
    swiper.autoplay.start()
  }
})