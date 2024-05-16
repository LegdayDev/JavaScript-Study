## JavaScript 6일차 학습

### 목차
> 1. Fetch 란?

---
### 1. Fetch 란?
> JS의 `Fetch API` 는 **웹 브라우저(Client)에서 서버로 HTTP(HTTPS)요청을 보내기 위한 API**이다. `XMLHttpRequest` 보다 더 
> 직관적이고 쉬우며, **Promise 기반으로 동작하여 비동기적으로 데이터를 처리**한다.

#### 주요특징
1. `비동기처리` : 비동기적으로 데이터를 요청하고 응답받으므로 _**웹 애플리케이션에서 더 반응적으로 동작**_
2. `Promise 기반` : `then()` , `catch()` , `finally()` 등의 메서드로 결과를 처리
3. `header 와 body 설정` : `fetch()` 함수에 전달하는 옵션으로 _**header, body, HTTP 메서드 등을 쉽게 설정**_
4. `에러처리` : 네트워크 오류 등 _**오류 발생 시 catch 블록에서 에러처리 가능**_
5. `다양한 데이터 형식 지원` : JSON 뿐 아니라, _**Blob, FormData 등 다양한 형식의 데이터 송수신**_

#### post 방식
- GET 방식으로 요청할 때는 HTTP Body 를 생략할 수 있어 코드가 짧아지지만 POST 는 옵션이 많아진다.
- 아래는 GET 방식일 떄 코드이다.
    ```javascript
    fetch('https://jsonplaceholder.typicode.com/posts/1').
    then(resp => resp.json()).
    then(json => console.log('data=' + json));
    ```
- POST 방식일 때는 HTTP Method , HTTP header , HTTP Body 를 옵션값을 통해 설정해줘야 한다.
  ```javascript
  fetch('https://jsonplaceholder.typicode.com/posts',{
             method: 'POST',
             body: JSON.stringify({
                  title: 'Who are you?',
                  body:'Football King CR7',
                  userId:7,
             }),
             headers:{
                 'Content-type': 'application/json; charset=UTF-8',
             },
         }).
         then(resp=>resp.json()).then(json=>console.log(json));
  ```