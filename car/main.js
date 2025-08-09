let Search=document.querySelector('.searchbox');

document.querySelector('#search-icon').onclick=()=>{
    Search.classList.toggle('active');
    menu.classList.remove('active');
}
car-project/car/main.js
let menu=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=()=>{
    menu.classList.toggle('active');
    Search.classList.remove('active');

}
window.onscroll=()=>{
    menu.classList.remove('active');
    Search.classList.remove('active');
}


// header

let header=document.querySelector('header');

window.addEventListener('scroll',()=>{
header.classList.toggle('shadow',window.scrollY>0);
})

