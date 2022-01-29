'use strict'

// Promise is a JavaScript object for asynchronous operation
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing somethig...');
    setTimeout(()=>{
        resolve('june');
        // reject(new Error('no network'));
    },2000);
});

// 2. Consumers: then, catch, finally
promise //
.then((value) => {
    console.log(value);
})
.catch((error)=> {
    console.log(error);
})
.finally(()=> {
    console.log('finally');
});


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
});


fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling

const haveBreakfast = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🥣'), 1000);
});
const haveLunch = breakfast =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${breakfast} => 🍱`), 1000);
});
const haveDessert = lunch =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${lunch} => 🍩🥛`)), 1000);
});
const haveDinner = dessert =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${dessert} => 🍣🍺`), 1000);
});

haveBreakfast()
.then(haveLunch)
.then(lunch => haveDessert(lunch))
.catch(error => {
    return '😢';
})
.then(dessert => haveDinner(dessert))
.then(todayFood => console.log(todayFood));

