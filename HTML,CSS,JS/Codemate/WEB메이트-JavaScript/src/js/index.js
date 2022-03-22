const toCatBtn = document.querySelector('#to_cat_button');
const toCatText = document.querySelector('#to_cat_text');


function CheckText() {
    const value = toCatText.value;

    if (value === '냐옹') {
        console.log('뭐라냥?😑');
    } else if(value === '간식 줄까?') {
        console.log("내놓아라냥😈");
    } else {
        console.log("냥무시🥱");
    }
}


toCatBtn.addEventListener('click',CheckText);