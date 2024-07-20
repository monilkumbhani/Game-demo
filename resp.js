burgar =document.querySelector('.burgar')
header =document.querySelector('.header')
col-two=document.querySelector('.col-two')
col-one=document.querySelector('.col-one')

burgar.addEventListener ('click', ()=>{
    col-two.classList.toggal('v-class-resp');
    col-one.classList.toggal('v-class-resp');
    header.classList.toggal('h-nav-resp');
})