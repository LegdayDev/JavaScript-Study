// 1. boolean to JSON
let json = JSON.stringify(true);
console.log(json);

console.clear();
// 2. array to JSON
json = JSON.stringify(['Cristiano', 'Lionel']);
console.log(json);

/*
 객체는 ({ }) , 배열은 ([ ])
    let newVar = [1, true, 'str', {inkey:"value"}, null];

 숫자
    {key : 1};

 문자열
    {key : "str"}

  오브젝트
    {key : {inkey:"value"}}

  null
    {key:null}
*/

console.clear();
// 3. 오브젝트
const footballMaster = {
    name: "Cristiano",
    age: 38,
    height: "180cm",
    birthDate: new Date(),
    shoot: () => {
        console.log(`${name} is Poser Shoot!`);
    }
};

json = JSON.stringify(footballMaster); // 함수는 JSON 변환이 안된다.
console.log(json);

console.clear();
// 오브젝트의 특정 key 를 뽑아 JSON 가능
json = JSON.stringify(footballMaster, ['name', 'age']);
console.log(json);

console.clear();
// 콜백
json = JSON.stringify(footballMaster, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});

console.clear();
// json -> object
const obj = JSON.parse(json);
console.log(obj);

console.log(footballMaster.birthDate.getDate()); // number 타입
console.log(footballMaster.birthDate); // object 타입

// JSON 으로 변환시키면 String 타입인데 parse() 를 통해 object 로 변환시키면 다 string 이 된다.
const obj1 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);

    return key === 'birthDate' ? new Date(value) : value;
})

console.clear();
console.log(obj1.birthDate);
console.log(obj1.birthDate.getDate());