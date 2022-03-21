const callBtn = document.querySelector('.call__button');
const userName = document.querySelector('.user__name');
const phoneNumber = document.querySelector('.user__phone_number');


function PhoneCall() {
    setTimeout(()=>{
        userName.innerText = 'Oh29😜';
        phoneNumber.innerText = '010-2929-2929';
    
        userName.classList.add('text_Xlarge');
        phoneNumber.classList.add('text_large');
    
        callBtn.innerHTML = `<i style='color:red;' class="fa-solid fa-phone-slash"></i>`;

        callBtn.addEventListener('click', StopCall);
    },2000);
}

function StopCall() {
    location.reload();
}

callBtn.addEventListener('click', PhoneCall);