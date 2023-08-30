const toggleBtn = document.querySelector('.header_wrap > .menuBtn');
const toggleClose = document.querySelector('.closeBtn');
const togglePage = document.querySelector('.toggleMenuList');

toggleBtn.addEventListener('click', () => {
  togglePage.classList.add('toggleOpen')
})
toggleClose.addEventListener('click', () => {
  togglePage.classList.remove('toggleOpen')
})