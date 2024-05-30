let 제품목록 = [];
let 주문목록 = [];
let 주문번호 = 0;
let 자동주문Interval;

// 0. 로컬스토리지 불러오기
function 로컬스토리지불러오기() {
    let 로컬데이터 = JSON.parse(localStorage.getItem('제품목록'));
    if (로컬데이터 == null) {
        제품목록 = [];
    } else {
        제품목록 = 로컬데이터;
    }
}

// 1. 제품등록
function 제품등록() {
    로컬스토리지불러오기();
    let 등록할제품명 = document.querySelector('#inputItemName').value;
    document.querySelector('#inputItemName').value = '';
    let 등록할가격 = document.querySelector('#inputItemPrice').value;
    document.querySelector('#inputItemPrice').value = '';
    let currentDate = new Date();
    let 년도 = String(currentDate.getFullYear());
    let 월 = String(currentDate.getMonth() + 1).padStart(2, "0");
    let 일 = String(currentDate.getDate()).padStart(2, "0");
    let 시간 = String(currentDate.getHours());
    let 분 = String(currentDate.getMinutes());
    let 등록일 = `${년도}-${월}-${일} ${시간}:${분}`;
    제품목록.push({ 상품명: 등록할제품명, 가격: 등록할가격, 등록일: 등록일 });
    localStorage.setItem('제품목록', JSON.stringify(제품목록));
}

// 2. 자동 주문 함수
function 자동주문() {
    로컬스토리지불러오기();
    let 로컬에있는제품개수 = 제품목록.length;

    // 기존에 설정된 Interval이 있으면 제거
    if (자동주문Interval) {
        clearInterval(자동주문Interval);
    }

    // 3초마다 하나씩 추가
    자동주문Interval = setInterval(() => {
        if (로컬에있는제품개수 > 0 && 주문목록.length < 로컬에있는제품개수) {
            let 랜덤인덱스;
            let 랜덤제품;

            // 중복되지 않는 제품을 선택
            do {
                랜덤인덱스 = Math.floor(Math.random() * 로컬에있는제품개수);
                랜덤제품 = 제품목록[랜덤인덱스];
            } while (주문목록.includes(랜덤제품));

            주문번호++;
            let 주문시간 = new Date().toLocaleString();
            주문목록.push({ ...랜덤제품, 주문번호: 주문번호, 주문시간: 주문시간 });
            화면갱신(); // 화면을 갱신
        } else {
            clearInterval(자동주문Interval);
        }
    }, 3000);
}

// 3. 화면갱신 함수
function 화면갱신() {
    let 화면에뿌릴HTML = '';
    for (let i = 0; i < 주문목록.length; i++) {
        let 주문제품 = 주문목록[i];
        화면에뿌릴HTML += `
            <tr>
                <td>${주문제품.주문번호}</td>
                <td>${주문제품.상품명}</td>
                <td>${주문제품.가격}</td>
                <td>${주문제품.주문시간}</td>
            </tr>
        `;
    }
    document.querySelector('#printItemList').innerHTML = 화면에뿌릴HTML;
}
