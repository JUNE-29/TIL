const toCatBtn = document.querySelector('#to_cat_button');
const toCatText = document.querySelector('#to_cat_text');

let catSay = document.querySelector('.cat_speech');
const speechBalloon = document.querySelector('.cat_speech_balloon');
const lightCat = document.querySelector('.cat_illust_light');
const nightCat = document.querySelector('.cat_illust_night');

let light = true;

function CheckText() {
    const text = toCatText.value;

    if (text === '') {
        alert('말을 하라냥!!! 😾');
        toCatText.focus();
        return;

    } else if (text === '불꺼줘') {
        catSay.innerText = '냥!🌙';
        document.body.classList.add('background_color_black');
        speechBalloon.classList.add('night');
        lightCat.classList.add('hidden');
        nightCat.classList.remove('hidden');

        light = false;

    } else if (text === '불켜줘' || text === '다시 불켜줘') {

        if (light === false) {
            catSay.innerText = '냥!💡';

            document.body.classList.remove('background_color_black');
            speechBalloon.classList.remove('night');
            lightCat.classList.remove('hidden');
            nightCat.classList.add('hidden');

            light = true;
        } else {
            catSay.innerText = '? 어리둥절냥';
        }

    } else if (text === '사랑해' || text === '사랑해!') {
        catSay.innerText = '그럼 간식 대령해랴냥❤';

    } else {
        catSay.innerText = '냥무시😏'
    }
}


toCatBtn.addEventListener('click',CheckText);