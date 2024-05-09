/*
    object 는 key:value 형식이다. (value 는 문자열이다)
*/

// function 을 사용할 때 생성
const name = "Cristiano";
const age = 37;
print(name, age);

function print(name, age) {
    console.log("당신의 이름은 : " + name);
    console.log("당신의 나이는 : " + age + "살");
}

console.clear();

// object 를 사용할 때
const obj1 = {}; // object literal syntax
const obj2 = new Object(); // object constructor syntax

const scott = {name: 'scott', age: 20}; // 클래스가 없어도 객체 생성
console.log(scott);

// 객체 값 추가
scott.gender = true;
console.log(scott);

// 객체 삭제
delete scott.gender;
console.log(scott);

console.log(scott.name); // 프로그램 작성 시
console.log(scott['name']); // 동적으로 실행

function printValue(obj, key) {
    console.log(obj.key)
    console.log(obj[key])
}

printValue(scott, 'name');

// in : object 에 key 가 있는지 여부
console.log('name' in scott);
console.log('age' in scott);
console.log('random' in scott);

const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

for (value in array) {
    console.log(value);
}

console.clear();
// object 얉은 복사
const user = {name: 'cristiano', age: 38};
const user2 = user;

user2.age = 80;

console.log(user.age);
console.log(user2.age);

// object 깊은 복사
const user3 = {};
Object.assign(user3, user);
user.gender = 'male';
console.log(user);
console.log(user3);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'mid'};
const mixed = Object.assign({}, fruit1, fruit2); // fruit1 에 fruit2 가 깊은복사 되고 다시 빈객채에 복사되서 mixed 에 들어간다
console.log(mixed.color);
console.log(mixed.size);