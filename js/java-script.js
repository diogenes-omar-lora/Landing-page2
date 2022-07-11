const btn = document.querySelector('#btn');
const nav = document.querySelector('.sidebar-nav');

btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
})