/*
    HTML 문서 전체에 적용 : document.getElementByTagName(name);
    특정요소 내 적용 : element.getElementsByTagName(name);
    반환값은 태그 이름에 해당하는 모든 요소를 HTMLCollection 객체로 반환
*/

/*
    - HTMLCollection 객체를 반환하는 메서드
        1. getElementByTagName()
          - 태그이름과 일치하는 모든 요소를 찾아서 HTMLCollection 객체로 변환
        2. getElementByClassName()
          - 클래스명과 일치하는 모든 요소를 찾아서 HTMLCollection 객체로 변환
        3. getElementById()
          - 아이디명 일치하는 모든 요소를 찾아서 HTMLCollection 객체로 변환

    - querySelector() : CSS 선택자와 일치하는 첫 번째 요소의 객체를 반환
    - querySelectorAll() : CSS 선택자와 일치하는 모든 요소 객체를 반환
*/

const liElements = document.getElementsByTagName('li');
console.log(liElements);

for (const element of liElements) {
    console.log(element.textContent); //textContent 는 해당요소의 텍스트값을 갖고온다.
}

const arr = [...liElements]; // 스프레드 문법
arr.forEach(li=>{
    console.log(li);
})

