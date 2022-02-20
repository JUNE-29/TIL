const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target__img');
const coordinates = document.querySelector('.coordinates');

document.addEventListener("mousemove",(e)=>{
    const x = e.clientX;
    const y = e.clientY;

    horizontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;

    coordinates.style.top = `${y}px`;
    coordinates.style.left = `${x}px`;
    coordinates.innerText= `X: ${x}, Y: ${y}`;

    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
});
