## JavaScript 2일차 학습

### 목차

> 1. 배열(array) 과 반복문
> 2. 슬라이스(splice) 와 concat
> 3. 함수(function)

---

### 1. 배열(array) 과 반복문

- JS 에서 배열을 생성하는 법은 2가지이다.
    1. `const arr = new Array();`
    2. `const arr = ['1','2','3'];`
- 배열은 객체이기 때문에 많은 내장함수가 있다.
  - `forEach()` 는 배열의 각 인덱스에 접근하여 람다식같은 것을 통해 새로운 함수 실행 가능
    - `arr.forEach(value => console.log(value));` -> 인자가 1개면 괄호 생략가능
  - `push()` 는 배열의 마지막 인덱스에 데이터를 추가
  - `pop()` 은 배열의 마지막원소를 삭제하고 삭제한값을 반환한다.
  - `unshift()` 는 배열의 첫번째 인덱스에 데이터를 추가한다
  - `shift()` 는 배열의 첫번째 인덱스를 삭제한다.
---
### 2. 슬라이스(splice) 와 concat
- JS 에서 슬라이스는 배열 요소를 추가 및 또는 제거한다.
- 원래 배열을 덮어쓰는 것이다.
- 기본적으로 2개의 인자가 있다.
  - `start` : 시작 인덱스
  - `deleteCount` : 삭제할 갯수
  ```javascript
  console.log("==== 슬라이스 학습 ====");
  const fruits = ['🍋', '🥝'];
  console.log(fruits);
  fruits.push('🥭', '🍓', '🍒', '🍑');
  console.log(fruits);
  
  fruits.splice(1, 1); // 시작인덱스 , 삭제할 갯수
  console.log(fruits);
  fruits.splice(3, 2);
  console.log(fruits);
  ```
- concat 은 서로다른 배열을 연결할 때 사용하는 함수이다.
  - `const newArray = array1.concat(array2);`
---
### 3. 함수
- JS 에서 함수는 다른 프로그래밍의 언어와 호출과 정의하는 법은 비슷하다.
- 함수를 정의하기 위해서는 `function` 이라는 키워드로 시작한다.
  ```java
  function 함수명() {
      // .....
  }
  ```
- 호출하기 위해서는 `함수명();` 을 통해서 호출한다.
- JS 는 호이스팅이라는 기술을 통해 함수를 먼저 호출하고 아래에 정의를 해도 실행이 된다 !!