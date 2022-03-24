const toCatBtn = document.querySelector('#to_cat_button');
const toCatText = document.querySelector('#to_cat_text');

let catSay = document.querySelector('.cat_speech');
const speechBalloon = document.querySelector('.cat_speech_balloon');
const nomalCat = document.querySelector('.cat_illust_normal');
const nightCat = document.querySelector('.cat_illust_night');
const partyCat = document.querySelector('.cat_illust_party');

let light = true;
let follow = false;

function CheckText() {
    const text = toCatText.value;

    const turnOffLight = () => {
        catSay.innerText = '냥!🌙';
        document.body.classList.add('background_color_black');
        speechBalloon.classList.add('night');
        nomalCat.classList.add('hidden');
        nightCat.classList.remove('hidden');

        light = false;
    };

    const turnOnLight = () => {

        if (light === true) {
            catSay.innerText = '? 어리둥절냥';
            return;
        }

        catSay.innerText = '냥!💡';

        document.body.classList.remove('background_color_black');
        speechBalloon.classList.remove('night');
        nomalCat.classList.remove('hidden');
        nightCat.classList.add('hidden');

        light = true;
    };

    const followGame = () => {
        if (text === '그만해') {
            catSay.innerText = '그만한다냥..... ';
            follow = false;
            return;
        }

        catSay.innerText = `${toCatText.value}` + ' 냥~';
    };

    const party = () => {
        setTimeout(()=>{
            catSay.innerText = '[OH] 🤘 PARTY TONIGHT 🤘 [OH]';
            document.body.classList.add('rainbow_background');
            nomalCat.classList.add('hidden');
            partyCat.classList.remove('hidden');
            
        },2000);
    };

    const partyOff = () => {
        document.body.classList.remove('rainbow_background');
        nomalCat.classList.remove('hidden');
        partyCat.classList.add('hidden');
    }

    if (text === '') {
        alert('말을 하라냥!!! 😾');
        toCatText.focus();
        return;

    } else if (text === '불꺼줘') {
        turnOffLight();

    } else if (text === '불켜줘' || text === '다시 불켜줘') {
        turnOnLight();

    } else if (text === '사랑해' || text === '사랑해!') {
        catSay.innerText = '그럼 간식 대령해랴냥❤';

    } else if (text === '따라해봐') {
        follow = true;
        catSay.innerText = '알았냥~ ';

    } else if (follow === true) {
        followGame();

    } else if (text === '파티하자') {
        catSay.innerText = '알았다냥~! 2초만 기다려봐냥!';
        party();

    } else if (text === '파티그만' || text === '파티 그만') {
        partyOff();
        catSay.innerText = '파티끝이다냥!';
    }else {
        catSay.innerText = '냥무시😏'
    }

}


toCatBtn.addEventListener('click',CheckText);