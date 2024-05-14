// synchronous
console.log("==== synchronous ====")
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

// Asynchronous
console.log("==== asynchronous ====")
console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3');

function printImmedi(print) {
    print();
}

// 콜백은 동기화/비동기화에 둘 다 사용가능
printImmedi(() => console.log("Hello"));

function printDelay(print, timeout) {
    setTimeout(print, timeout);
}

printDelay(() => console.log('async callback'), 4000);
