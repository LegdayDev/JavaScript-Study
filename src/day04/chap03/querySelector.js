// <li> 첫번째 요소에 접근

// querySelector 는 첫번째 요소에 접근한다.
document.querySelector("li").style.backgroundColor = "red";

let btn = document.querySelector("#myBtn");

let liTags = document.querySelectorAll("li");
let count = 0;
let color = ["red", "green", "blue"];

btn.addEventListener("click", () => {
    liTags[count].style.backgroundColor = color[count];
    count++;
    if (count == 3) count = 0;
});

