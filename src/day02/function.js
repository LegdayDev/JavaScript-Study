/* 함수 */

/* 함수의 호출과 정의
func(); 함수 호출
func() { 함수 정의
    ~~~
}
*/

// printHello(); 호이스팅으로 인하여 먼저 호출해도 동작함.

function printHello() {
    console.log("안녕!");
}

printHello();

function log(message) {
    console.log(message);
}

log("머하노 ㅋㅋ");
log(123);


// 입력 파라미터를 객체로 받는 함수
function changeName(obj) {
    obj.name = 'Ronaldo';
}

const ellie = {name: 'Cristiano'};
console.log(ellie);

changeName(ellie);
console.log(ellie);

// 매개변수의 기본값을 정할 수 있다.
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}

showMessage("안녕하세요", "나");
showMessage("안녕하세요");

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

printAll('dream', 'coding', 'java', 1, 2);

// 함수 출력
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(10,5));

// 함수 표현식
let showHello = function (){
    console.log('Hello');
}
showHello();

let hiHello = showHello;
hiHello();

const simplePrint = function(){
    console.log('simplePrint');
}