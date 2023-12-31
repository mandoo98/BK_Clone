//import products from "../main_db.json" assert {type: 'json'}
let products;
let myProduct;

async function getJson(){
    const response = await fetch("../js/list/DB/Mobile/M_ChickenMenu.json");  
    products = await response.json();
    return products;
}
getJson()
.then((products)=>importData(products))


//li만들어서 ul에 넣어주는 함수
//menu list
const createItem = (product)=>{
    const tab13 = document.querySelector('#tab13 > .menuLists');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    a.setAttribute('href',product.href);
    a.classList = 'menuA';

    img.setAttribute('src',product.img);
    img.classList = 'menuImge';

    li.id = product.id;
    li.classList = 'menuList';
    
    p.className = 'menuName';
    p.innerHTML = product.name;

    tab13.append(li)
    li.append(a)
    a.append(img,p)
}
//만든 li들이 반복되게
const importData = ()=>{
  myProduct = products.ChickenMenu;
  myProduct.map((product)=>{ 
    //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
    if(!document.getElementById(product.id)) {  
      createItem(product);
    }
  })
}