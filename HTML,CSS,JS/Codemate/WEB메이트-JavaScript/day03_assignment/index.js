const p = document.getElementsByTagName('p');
const button = document.getElementsByTagName('button');

button[0].addEventListener("click", ()=> {
    p[0].innerHTML = "모처럼이니";
});

button[1].addEventListener("click", ()=> {
    p[1].innerHTML = "각잡고 열심히 하면";
});

button[2].addEventListener("click", ()=> {
    p[2].innerHTML = "코린이 탈출이다!!🙌";
});
