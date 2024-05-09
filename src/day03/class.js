/*
    class 란 template 이다.
    object 는 class에 데이터를 넣으면 객체가 된다.
*/

class Person {
    // 생성자(constructor)
    constructor(name, age) {
        this.name = name; // name 필드 선언 후 파라미터를 대입
        this.age = age; // age 필드 선언 후 파라미터를 대입
    }

    // 메서드
    speak() {
        console.log(`${this.name}: hello !!!`);
        console.log(`my age is ${this.age}`);
    }
}

const cristiano = new Person("Cristiano", 37);
cristiano.speak();

/* ================================= */
console.clear();

// Getter, Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this.age;
    }

    set age(age) {
        this.age = age;
    }
}

/* ================================= */
console.clear();

// 접근제어자
class Exper {
    publicField = 2 // #를 안붙히면 public 으로 설정
    #privateField = 0; // # 을 붙히면 private 으로 설정
}

const exper = new Exper();

console.log(exper.publicField);

console.clear();

// static
class Article {
    static publisher = "Cristiano Ronaldo";

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article("7777");

console.log(Article.publisher);

/* ================================= */
console.clear();
// 클래스 상속
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
};

class Rectangle extends Shape {
};

const rect = new Rectangle(20, 20, 'Red');

rect.draw();

class Triangle extends Shape {
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const tri = new Triangle(17,10,'blue');
console.log(tri.getArea());

/* ========================================= */
console.clear();

class Counter{
    constructor() {
        this.count=0;
    }
    increase(){
        this.count++;
        console.log(this.count);
    }
}

const colCounter = new Counter();
colCounter.increase();
colCounter.increase();