'use strict'

// JavaScript is sychronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
// var변수와 함수 선언들이 자동적으로 제일 위로 올라가는 것.
// 선언한 것들이 제일 위로 올라가는 것을 뜻한다.

setTimeout(() => console.log('1'), 1000);
console.log('2');
console.log('3');
console.log('4');
// syschronous는 위에('2','3','4') 코드 처럼 순서대로 실행하는 것이다.
// 비동기처리는 언제 코드가 실행될지 모른다. 예측할 수 없다.


// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(()=> console.log('hello'));
// 함수는 hoisting 되어진다.
// 자바스크립트 실행 순서는 printImmediately 함수 선언 위로 올려서 실행 -> '2','3','4' 바로 출력 -> timeout은 브라우저 요청
// -> printImmediately 호출한 거 실행 -> setTimeOut은 마지막 실행


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'),2000);

// 실행 순서(정리):
// 1) printImmediately 함수, printWithDelay 함수 hoisting하여 맨 위에 두고 실행
// 2) setTimeout 브라우저 요청
// 3) '2','3','4' 바로 출력
// 4) printImmediately() 호출하고 'hello' 출력 
// 5) printWithDelay() 호출하고 브라우저 요청
// 6) setTimeout 브라우저 요청한거 1초 뒤니까 '2' 출력
// 7) 2초 뒤에는 'async callback' 출력


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'june' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'june'){
                onSuccess({name:'june', role:'admin'});
            } else {
                onError(new Error('no access'))
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    user => {userStorage.getRoles(
        user, 
        userWithRole=>{
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        }, 
        error => {
            console.log(error);
        }
        );
    }, 
        error=> {console.log(error)}
    );