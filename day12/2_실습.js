/*
    실습2: 웹 가계부 만들기
        [요구사항]
        1. 항목마다 날짜, 항목명, 금액 3가지를 저장
        2. 등록된 금액의 총합계를 하단에 출력
        3. 출력은 table 사용

        + 추가 요구사항
        1. 테이블에 항목 내역을 아래와 같이 출력 해주세요
        날짜            항목            금액
        2024-05-23      콜라            1000
        2024-05-23      커피            2500

        2. 내역에서 특정 항목 삭제하는 버튼 기능 구현

        3. 금액의 천단위 마다 ,(쉼표) 처리

        (설계)
        [백엔드]
        1. 메모리 구성
            let dateList = []
            let nameList = []
            let moneyList = []
        2. 기능 구성
            add(){} 입력/저장 함수
            total(){} 총합계 함수

        3. 기능 구현
            1. 입력/저장 함수
                [로직 순서]
                1. 입력받고
                2. 배열 저장
                3. 안내 
            2. 총합계 함수
                [로직 순서]
                1. 배열에 있는걸 가져와서 다 더한다
                2. 총합계를 보여준다.

        [프론트엔드]
        1. HTML 구성
            인풋박스 3개
            table 1개
        2. HTML 구현 


        [백엔드/프론트엔드 연동]
        1. 선택자
        2. onclick
*/

let dateList = [];
let nameList = [];
let moneyList = [];

function add() {
    // [로직 순서] 1. 입력받고 2. 배열저장 3. 안내
    // 1.
    let dateInput = document.querySelector('#dateInput');
    let nameInput = document.querySelector('#nameInput');
    let moneyInput = document.querySelector('#moneyInput');

    let date = dateInput.value;
    let name = nameInput.value;
    let money = Number(moneyInput.value);

    // 2.
    dateList.push(date);
    nameList.push(name);
    moneyList.push(money);

    // 3.
    alert('항목 저장 성공');

    // 4. 출력함수
    print();
}

function total() {
    // [로직 순서] 1. 배열에 있는걸 가져와서 다 더해준다. 2. 총합계 보여준다.
    // 반복문을 사용해 moneyList[i] 값을 모두 더한다 
    let sum = 0; // 총합계 변수

    // i 부터 마지막 인덱스까지 = 배열을 순차적으로 순회(하나씩 금액 호출)
    for (let i = 0; i < moneyList.length; i++) {
        sum += moneyList[i]; // 누적합계: 배열내 금액의 총합계
    }

    // 호출 했던 곳으로 데이터 보내주기 = 반환
    return sum;
}

function print() {
    // HTML 출력
    // 1. 어디에 
    let moneyTable = document.querySelector('#moneyTable');
    // 2. 무엇을
    let html = ``;
    // 1. 테이블의 제목부분
    html += `
            <tr>
                <th>날짜</th>
                <th>항목</th>
                <th>금액</th>
                <th>비고</th>
            </tr>
    `;

    // 2. 테이블의 내용 부분: 항목 내역들 = 배열 전체
    for (let i = 0; i < moneyList.length; i++) {
        // 각 i번째 인덱스의 항목 정보를 호출 
        let currentMoney = moneyList[i];
        let currentName = nameList[i];
        let currentDate = dateList[i];

        html += `
            <tr>
                <td>${currentDate}</td>
                <td>${currentName}</td>
                <td>${currentMoney.toLocaleString()}</td>
                <td onclick="remove(${i})"><button>삭제</button></td>
            </tr>
        `;
        // console.log(html);
    }

    // 3. 하단 부분: 총합계
    html += `
            <tr>
                <td colspan="2">합계</td>
                <td colspan="2">${total().toLocaleString()}</td>
            </tr>
    `;


    // 3. 대입
    moneyTable.innerHTML = html;
    // console.log(html);
}

function remove(index) {
    dateList.splice(index, 1);
    nameList.splice(index, 1);
    moneyList.splice(index, 1);
    print();
}