// JSON

// 1. Object to JSON

let json = JSON.stringify(['🍕', '🍟']);
console.log(json);

const receipt = {
    hamburger: 'Avocado Bacon burger',
    fries: 'spicy chili french fries',
    baverage: 'sprite',
    size: 'medium',
    orderDate:  new Date(),
    coupon: false,
    discount: () => {
        console.log(`${this.fries} 할인되었습니다!`);
    },
    price: '6500'
};

json = JSON.stringify(receipt);
console.log(json);
// String으로 변환할 때, 함수는 포함되지 않는다.

json = JSON.stringify(receipt, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});

console.log(json);


json = JSON.stringify(receipt, (key, value) => {
    
    if(value.coupon === false) {
        value.price = '7500';
        return value;
        
    } else {
        return value;
    }
});

console.log(json);

// 2. JSON to Object

console.clear();

json2 = JSON.stringify(receipt);
const obj = JSON.parse(json2);
console.log(obj);
// replacer는 변환 전 값을 변형하여서 coupon 값이 false면 price 값이 '7500'으로 된다. 😦


const obj2 = JSON.parse(json2, (key, value) => {
    return key === 'orderDate' ? new Date(value) : value;
});

console.log(obj2);

console.log(obj2.orderDate.getDate());
console.log(obj2.orderDate.getHours());

console.log(obj.orderDate.getDate());
// obj의 orderDate는 String이기 때문에 오류가 난다.