const billboardBtn = document.querySelector('.billboard_button');
const text = document.querySelector('.text');
let count = 0;

function handleName() {
    const name = 'Oh29!';
    const colors = ['#FFDBE5', '#FFB6CA', '#FF91AF', '#FF6690','#FF3A70'];

    if(count < name.length) {
        text.innerHTML += name[count];
        text.style.cssText = `color:${colors[count]}`;
        count++;
    }else {
        text.innerHTML = ``;
        count = 0;
    }
}


billboardBtn.addEventListener('click', () => {
    handleName();
});