const drop = document.querySelectorAll('.dropMenu');

for (i = 0; i < drop.length; i++) {
  drop[i].addEventListener('click', function(){
    this.lastElementChild.classList.toggle('on');
  })
}
