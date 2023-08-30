const header = document.querySelector("header")
const menuBg=document.querySelector(".D_menuBg");
const mainMenu=document.querySelector(".D_mainMenu");
const subMenu=document.querySelectorAll(".D_subMenu");

mainMenu.addEventListener("mouseenter", function(){
  header.classList.add("boxShadow");
  menuBg.classList.add("open");  
  subMenu.forEach((sub)=>{
    sub.classList.add("open");
  })

})
mainMenu.addEventListener("mouseleave", function(){
  header.classList.remove("boxShadow");
  menuBg.classList.remove("open");
  subMenu.forEach((sub)=>{
    sub.classList.remove("open");
  })
})