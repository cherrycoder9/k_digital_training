/*
    실습2: 웹 가계부 만들기
        [요구사항]
        1. 항목마다 날짜, 항목명, 금액 3가지를 저장
        2. 등록된 금액의 총합계를 하단에 출력
        3. 출력은 table 사용

        +

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

    // 4. 총합계 출력 함수 호출
    total();
}

function total() {
    // [로직 순서] 1. 배열에 있는걸 가져와서 다 더해준다. 2. 총합계 보여준다.
    // 반복문을 사용해 moneyList[i] 값을 모두 더한다 
    let sum = 0; // 총합계 변수

    // i 부터 마지막 인덱스까지 = 배열을 순차적으로 순회(하나씩 금액 호출)
    for (let i = 0; i < moneyList.length; i++) {
        sum += moneyList[i]; // 누적합계: 배열내 금액의 총합계
    }

    // HTML 출력
    // 1. 어디에 
    let moneyTable = document.querySelector('#moneyTable');
    // 2. 무엇을
    let html = `<tr><th>총합계</th><th>${sum}</th></tr>`;
    // 3. 대입
    moneyTable.innerHTML = html;
}