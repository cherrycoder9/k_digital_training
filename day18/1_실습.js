console.log(`12345`);

/*
    1. 제품 {제품번호: , 제품명: , 가격: }
    2. 주문 {주문번호: , 주문시간: , 제품번호: }
*/

// 0. 제품 샘플
let 제품목록 = [
    { 제품번호: 1, 제품명: '코카콜라', 가격: 1500 },
    { 제품번호: 2, 제품명: '사이다', 가격: 2500 },
];

// 1. 제품 등록 함수: 등록 버튼을 클릭했을때
function 제품등록() {
    // 1. 입력받은 값을 가져온다.
    let 제품명 = document.querySelector(`#제품명`).value;
    let 가격 = document.querySelector(`#가격`).value;

    // 2. 데이터를 가공(객체화)
    let 제품번호 = 3; // 현재 제품목록의 마지막 제품번호의 + 1
    let 제품 = { 제품번호: 제품번호, 제품명: 제품명, 가격: 가격 };

    // 3. [유효성검사]
    // 생략

    // 4. 가공된 데이터를 저장한다
    제품목록.push(제품);
    alert(`제품등록 성공`);
    제품출력();
}

// 2. 제품 출력 함수
// JS가 열렸을때, 제품 등록/수정/삭제 했을때 
제품출력();
function 제품출력() {
    console.log(`제품출력()`);
    // 1. 어디에
    let 제품출력구역 = document.querySelector(`#제품출력구역`);
    // 2. 무엇을
    let html = ``;

    for (let i = 0; i < 제품목록.length; i++) {
        html += `
            <tr>
                <td>${제품목록[i].제품번호}</td>
                <td>${제품목록[i].제품명}</td>
                <td>${제품목록[i].가격}</td>
            </tr>
        `;
    }
    // 3. 대입 
    제품출력구역.innerHTML = html;
}