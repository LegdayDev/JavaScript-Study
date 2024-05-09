/* 배열 */

/* 배열 생성
const arr1 = new Array();
 */
const ary = [1, 2, 3, 4, 5];
console.log(ary);

const fruits = ['🍏', '🍎', '🍊'];
console.log(fruits);

console.log("==== 일반적인 for 문 ====")
// 일반적인 for 문
for (let i = 0; i < 3; i++) {
    console.log(fruits[i]);
}

console.log("==== index 가 아닌 value 에 접근하는 for 문 ====")
// for of 문
for (let fruit of fruits) {
    console.log(fruit);
}

console.log("==== for Each 문 ====")
// for Each 문은 다양한 형식으로 가능하다

/* 콜백함수(?) 로 사용
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
})
*/

/* 람다식으로 사용(인수가 2개이상이면 괄호로 묶어야 한다 !)
fruits.forEach((fruit, index) =>{
    console.log(fruit, index);
})
*/

// 람다식으로 사용(인수가 한개면 괄호 생략 가능
fruits.forEach(fruit => console.log(fruit));

// 배열의 길이를 반환할 때는 length 사용
console.log("배열의 길이는 : " + fruits.length);

// 배열에 마지막 인덱스에 데이터 추가 push()
console.log("데이터 추가 전 길이 " + ary.length);
ary.push(200);
console.log("데이터 추가 후 길이 " + ary.length);

// 배열 마지막원소 삭제 pop() -> 마지막 원소를 제거하고 그 값을 반환한다.
let number = ary.pop();
console.log(number)
console.log(ary);

// 배열의 첫번째 인덱스에 데이터 추가 unshift()
ary.unshift(0);
console.log(ary);

// 배열의 첫번째 인덱스 삭제 shift()
ary.shift();
console.log(ary);


