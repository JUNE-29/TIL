const toCatBtn = document.querySelector('#to_cat_button');
const toCatText = document.querySelector('#to_cat_text');

let catSay = document.querySelector('.cat_speech');

const speechBalloon = document.querySelector('.cat_speech_balloon');
const nomalCat = document.querySelector('.cat_illust_normal');
const nightCat = document.querySelector('.cat_illust_night');
const partyCat = document.querySelector('.cat_illust_party');

const caption = document.querySelector('.caption');

let light = true;
let follow = false;

const typewriter = new Typewriter(caption, {
    loop: false
});

let question = "";
let answer = "";
let key = 0;

const json = [
    {
        "question": "사랑해",
        "answer":"그럼 간식 대령해랴냥❤"
    }
];

function pushJson() {
    json.push({question: `${question}`, answer: `${answer}`});
        catSay.innerHTML = `'${question}' 에 대한 대답 '${answer}' 을(를) 배웠다냥! <br> 나는 천재고양이라냥😸`
        key = 0;
}

function writerAnimation() {
    typewriter.deleteAll()
    .typeString('냥이가 말을 이해하지 못 했다.')
    .pauseFor(1500)
    .start();

    setTimeout(()=>{
        typewriter.deleteAll();
    },2000);
};

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
    };

    if(key === 1) {
        if(text === "YES" || text === "yes") {
            catSay.innerHTML = `'${question}' 에 대한 대답을 알려달라냥😉`
            key = 2;
        } else {
            catSay.innerHTML = "냥🐱?";
            key = 0;
        }
        return;
    }

    if(key === 2) {
        answer = text;
        pushJson();
        return;
    }

    if (text === '') {
        alert('말을 하라냥!!! 😾');
        toCatText.focus();
        return;

    } else if (text === '불꺼줘') {
        turnOffLight();

    } else if (text === '불켜줘' || text === '다시 불켜줘') {
        turnOnLight();

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

        for(let i = 0; i < json.length; i++) {
            if(text === json[i].question) {
                catSay.innerHTML = json[i].answer;
                return;
            }
        }

        catSay.innerHTML = '뭔말이냥😑? 가르쳐달라냥. <br> YES 또는 NO 로 대답해달라냥.'
        writerAnimation();
        question = text;
        key = 1;
    }
}

typewriter.typeString('냥이에게 말을 걸어보자..!').start();
toCatBtn.addEventListener('click',CheckText);