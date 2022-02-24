const rabbit = document.querySelector('.rabbit');
const rabbitBtn = document.querySelector('.find_rabbit__btn');

rabbitBtn.addEventListener('click', (event)=>{
    rabbit.scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"});
});