let 제품목록 = [];
let 현재불러온제품개수 = 0;
let 출력인덱스 = 0;

// 0. 로컬스토리지 불러오기
function 로컬스토리지불러오기() {
    console.log('로컬스토리지불러오기');
    // 0-1. 로컬데이터 변수에 로컬스토리지에 있는 제품목록 객체 담기
    let 로컬데이터 = JSON.parse(localStorage.getItem('제품목록'));
    if (로컬데이터 == null) {
        제품목록 = [];
        console.log('로컬데이터는 null이다');
    } else {
        제품목록 = 로컬데이터;
        console.log('로컬데이터가 있어서 로딩됨', 로컬데이터);
        console.log(제품목록);
        현재불러온제품개수 = 제품목록.length;
        console.log(현재불러온제품개수);
    }
    // # 0-1. 문제 없음 

}

// 1. 제품등록
function 제품등록() {
    console.log('제품등록');

    // 1-1. localStorage의 상품들을 가져와 제품목록 배열에 넣는다.
    로컬스토리지불러오기();
    console.log('제품등록하면 나오는 제품목록', 제품목록);
    // # 1-1. 문제 없음

    // 1-2. 인풋박스의 제품명과 가격을 가져와 처리할 변수에 저장한다.
    let 등록할제품명 = document.querySelector('#inputItemName').value;
    document.querySelector('#inputItemName').value = '';
    console.log(등록할제품명);
    let 등록할가격 = document.querySelector('#inputItemPrice').value;
    document.querySelector('#inputItemPrice').value = '';
    console.log(등록할가격);
    // # 1-2. 문제 없음

    // 1-3. 등록일과 현재 날짜와 시간을 구하고 등록일 변수에 일정 형식으로 저장한다.
    let currentDate = new Date();
    let 년도 = String(currentDate.getFullYear());
    let 월 = String(currentDate.getMonth() + 1);
    let 일 = String(currentDate.getDate());
    let 시간 = String(currentDate.getHours());
    let 분 = String(currentDate.getMinutes());
    월 = String(월).padStart(2, "0");
    일 = String(일).padStart(2, "0");
    let 등록일 = `${년도}-${월}-${일} ${시간}:${분}`;
    console.log(등록일);
    // # 1-3. 문제 없음 

    // 1-4. 제품목록 배열에 객체화 시켜서 넣고 localStorage도 갱신한다.
    제품목록.push({ 상품명: 등록할제품명, 가격: 등록할가격, 등록일: 등록일 });
    localStorage.setItem('제품목록', JSON.stringify(제품목록));
    console.log(제품목록);
    console.log('제품목록');
    // # 1-4. 문제 없음


}

// 2. 자동 주문 함수 
function 자동주문() {
    console.log('자동주문');
    // 2-1. 로컬스토리지에 있는 상품 갯수 받기
    let 로컬에있는제품개수 = JSON.parse(localStorage.getItem('제품목록')).length;
    console.log('로컬에있는제품개수', 로컬에있는제품개수);
    // # 2-1. 문제없음 

    // 2-2. 버튼이 클릭되면 3초마다 한번씩 실행된다. 
    let 자동주문인터벌 = setInterval(() => {
        // 랜덤한 인덱스 선택
        let 랜덤인덱스 = Math.floor(Math.random() * 로컬에있는제품개수);
        // 선택된 상품 추가
        let 선택된상품 = JSON.parse(localStorage.getItem('제품목록'))[랜덤인덱스];
        // 화면에 추가된 상품만 출력
        화면에추가된상품출력(선택된상품);
    }, 3000);
}

// 3. 화면에 추가된 상품만 출력하는 함수
function 화면에추가된상품출력(상품) {
    let 화면에뿌릴HTML = `
        <tr>
            <td>${document.querySelector('#printItemList').children.length + 1}</td>
            <td>${상품.상품명}</td>
            <td>${상품.가격}</td>
            <td>${상품.등록일}</td>
        </tr>
    `;
    // printItemList 아이디의 innerHTML에 출력할 변수 갱신
    document.querySelector('#printItemList').innerHTML += 화면에뿌릴HTML;
}

// 4. 화면갱신 함수 
function 화면갱신() {
    let 화면에뿌릴HTML = '';

    // 4-1. 로컬 스토리지에 저장되어 있는 제품목록을 가져온다 
    로컬스토리지불러오기();
    console.log('화면갱신하면 나오는 제품목록', 제품목록);
    // # 4-1. 이상 없음

    // 4-2. 제품목록에 있는 배열들을 돌면서 화면을 갱신한다
    for (let i = 0; i < 제품목록.length; i++) {
        // 번호, 상품명, 가격, 등록일
        화면에뿌릴HTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${제품목록[i].상품명}</td>
                <td>${제품목록[i].가격}</td>
                <td>${제품목록[i].등록일}</td>
            </tr>
        `;
    }
    // printItemList 아이디의 innerHTML에 출력할 변수 갱신
    document.querySelector('#printItemList').innerHTML = 화면에뿌릴HTML;
}