window.onload = function(){
  const listSelect = document.querySelectorAll('.listSelect li a')
  const menuBtns = document.querySelectorAll('.menu_page > .menuBtns > .menuBtn');
  const menuLists = document.querySelectorAll('.menu_page > .menuList_wrap > li > .menuLists');
  let activeTab = 0;

  //메인메뉴바에서 선택할 경우
  listSelect.forEach((select, index) => {
    select.addEventListener('click', function(){
      menuBtns.forEach((item) => {
        item.classList.remove('on')
      })
      menuLists.forEach((inner) => {
        inner.classList.add('off')
      })

      menuBtns[index].classList.add('on')
      menuLists[index].classList.remove('off')
      activeTab = index;
    })
  })

  //탭메뉴
  menuBtns.forEach((menu, index) => {
      menu.addEventListener('click', function(){
        menuLists.forEach((inner)=> {
          inner.classList.add('off')
        })  
        menuBtns.forEach((item)=> {
          item.classList.remove('on')
        })
    
        menuBtns[index].classList.add('on')
        menuLists[index].classList.remove('off')
        activeTab = index;
      })
  })
}