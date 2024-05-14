// promise status : pending -> fulfilled or reject

// 1. producer

let promise = new Promise((resolve, reject) => { // Promise 를 만드는 순간 실행이 된다
    console.log("doing something ...");
});

let promise2 = new Promise((resolve, reject) => {
    console.log("doing something ...");
    setTimeout(() => {
        resolve('Cristiano'); // 실행이 정상적으로 완료되면 호출
    }, 2000);
});

promise2.then(value => {
    console.log(value);
})

// resolve() 가 전달한 값 'adam'을 then() 을 통해서 받아온다.

let promise3 = new Promise((resolve, reject) => {
    console.log("doing something ...");
    setTimeout(() => {
        let a = Math.round(Math.random() * 10) + 1;
        let b = Math.round(Math.random() * 10) + 1;
        console.log(a);
        console.log(b);
        if (a / b == 0) reject(new Error(`${a} 와 ${b} 는 같다!`));
        else resolve(`${a} 와 ${b} 는 같지 않다!`);
    }, 2000);
});

promise3.then(resData => {
    console.log(resData); // ERROR 가 날라왔기 때문에
}).catch(error => {
    console.log(error); // 예외처리
})

let fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1);
            }, 1000);
        })
    }).then(num => console.log(num));

// Error
let getHan = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('😀')
        }, 2000);
    })
};

let getEgg = (hen) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🍎')
        }, 2000);
    })
};

getHan()
    .then(hen => getEgg(hen)).then(egg => console.log(egg));
