// // 중괄호 안에서 태어나면 밖으로 못나가고 안으로만 갈 수 있다
// let 변수1 = '전역1';

// if (true) {
//     let 변수2 = '지역1';
//     console.log(변수2);

//     for (let i = 0; i < 1; i++) {
//         let 변수3 = '지역2';
//         console.log(변수1);
//         console.log(변수2);
//         console.log(변수3);
//     }
// }

// function 경기도() {
//     let 서장훈 = '수원시';
//     return 서장훈;
// }

// console.log(변수1);
// console.log(경기도());
// console.log(경기도());
// console.log(경기도());
// // console.log(변수2);
// // console.log(변수3);


// 전역변수와 지역변수의 활용 예 
// 0. 배열 선언 (전역)
let 배열 = [];
function 등록() {
    // 1. 입력받고 변수에 저장한다
    // let 입력 = prompt('성명');
    let 입력 = document.querySelector('#성명').value;
    // 2. 입력받고 변수에 저장한다 
    배열.push(입력);
    // 3. HTML에 출력한다
    document.querySelector('#출력박스').innerHTML = 배열;
    document.querySelector('#성명').value = '';
}

/* 함수 사용하는 이유
    1. 반복되는 코드를 한번에 정의하고 필요에 따라 호출해서 반복 작업을 피할수 있다. = 코드량 줄이기
    2. 긴 프로그램을 기능별로 나눠 여러 함수를 구성해서 여러 함수로 (모듈화로) 전체 코드의 가독성이 좋아진다.
    3. 기능별(함수별)로 수정이 편하고 유지보수 쉽다.
    4. 매개변수/인수에 따른 서로 다른 결과물 ex) x=3일떄와 x=5일때 서로다른 결과 가능해짐
    5. {} 지역변수 사용하기 때문에 메모리 효율성이 좋다. 함수 실행 될때만 {} 메모리 할당되고 함수가 종료되면 메모리 해제 
*/ 