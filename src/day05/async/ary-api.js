// join() : array -> string
let fruits = ['apple', 'banana', 'orange'];
let result = fruits.join('/');
console.log(result);


// split(separator) : 문자열을 separator로 자른다.
fruits = '🫐,🍍,🍔,🍠,🍅';
result = fruits.split(',');
console.log(result);


// find() -> 제일 처음 일치하는 요소 반환
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

let studentList = [
    new Student("Cristiano", 38, true, 100),
    new Student("Lionel", 36, true, 95),
    new Student("Neymar", 36, false, 90)
];

result = studentList.find(function (student, index) {
    return student.score === 90;
});
console.log(result);

// filter -> 일치하는 모든 요소 반환
result = studentList.filter(student=> student.enrolled);
console.log(result);


// map -> 각각의 요소를 수정하여 반환
result = studentList.map(student => student.score);
console.log(result);

























