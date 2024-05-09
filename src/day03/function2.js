function calculate(command, a, b) {
    if (command === 'add') {
        return a + b;
    } else if (command === 'sub') {
        return a - b;
    } else if (command === 'divide') {
        return a * b;
    } else if (command === 'mul') {
        return a / b;
    }
}

let res1 = calculate("add", 1, 2);
let res2 = calculate("sub", 1, 2);
let res3 = calculate("divide", 1, 2);
let res4 = calculate("mul", 1, 2);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

console.clear();

// 함수를 파라미터로 받을 때는 함수이름을 전달한다 !!!
function doSomething(addFunc) {
    console.log(add);
    const res3 = addFunc(2, 3);
    console.log(res3);
}

function addFunc(a, b) {
    return a + b;
}

doSomething(add);

console.clear();

function add(num1 , num2){
    return num1 + num2;
}

function mul(num1 , num2){
    return num1 * num2;
}

// callback 은 다형성과 같다.
// callback 이란 입력으로 전달된 함수를 callback 이라 한다.
function surpise(callback) {
    return callback(3,5);
}
console.log(surpise(mul));

