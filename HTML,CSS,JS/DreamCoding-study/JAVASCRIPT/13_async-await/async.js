// async & await
// Clear style of using promise

// 1.async
// async를 함수 앞에 붙여주면 자동으로 promise를 실행한다.
// promise를 간편하게 쓸 수 있다.
async function fetchUser() {
     // do network request in 10 secs....
    return('june');
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2.await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getPizza() {
    await delay(1000);
    return '🍕';
}

async function getHotdog() {
    await delay(1000);
    return '🌭';
}

// 이렇게 작성할 수 있으나 콜백지옥 같으므로
// function pickFoods() {
//     return getPizza()
//     .then(pizza => {
//         return getHotdog().then(hotDog => `${pizza} + ${hotDog}`)
//     });
// }

// 🔽 
// async function pickFoods() {
//     const pizza = await getPizza();
//     const hotDog = await getHotdog();
//     return `${pizza} + ${hotDog}`;
// }


// 🔽 병렬구조로 바꿔보자✨
async function pickFoods() {
    const pizzaPromise = getPizza();
    const hotDogPromise = getHotdog();
    const pizza = await pizzaPromise;
    const hotDog = await hotDogPromise;
    return `${pizza} + ${hotDog}`;
}
pickFoods().then(console.log);

// 하지만 이렇게 쓰지 않는다고 한다.
// 🔽 병렬구조를 API를 이용해 바꿔보자✨

// 3. useful Promise APIs 

function pickAllFruits() {
    return Promise.all([getPizza(), getHotdog()])
    .then(foods => foods.join(' + '));
}

pickAllFruits().then(console.log);


function pickOnlyOne() {
    return Promise.race([getPizza(), getHotdog()]);
}

pickOnlyOne().then(console.log);