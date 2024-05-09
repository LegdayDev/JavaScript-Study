/* 슬라이스 */
console.log("==== 슬라이스 학습 ====");
const fruits = ['🍋', '🥝'];
console.log(fruits);
fruits.push('🥭', '🍓', '🍒', '🍑');
console.log(fruits);

fruits.splice(1, 1); // 시작인덱스 , 삭제할 갯수
console.log(fruits);
fruits.splice(3, 2);
console.log(fruits);

// 배열을 붙히는 함수 concat
const fruits2 = ['🧄', '🥚', '🥦'];

const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear()
console.log(fruits);

// 원소의 위치값을 반환하는 indexOf()
console.log(fruits.indexOf('🍋'));

// 원소를 갖고있는지 여부 확인 includes() -> true/false 반환
console.log(fruits.includes('🍓'));