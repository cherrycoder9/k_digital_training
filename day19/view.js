/*
    게시물 상세 페이지
        - 전체출력 페이지에서 특정 제목 클릭시 <a> 이용한 상세페이지 이동 
        - 무엇의 특정 게시물을 클릭했는지 식별 필요하다. 
            1. localStorage, sessionStorage 저장 
            2. JS 변수 저장 X [페이지 전환되면 JS도 초기화]
            3. * URL(주소)에 매개변수 넣어주는 방식 많이 사용함
                - 쿼리스트링 방식 이라고 함, 문자형식 지원, 주로 간단한 데이터 식별자 
                URL?변수명=값
                URL?변수명=데이터&변수명=데이터
                
                - <a href="view.html?no=7"> 변수명 no, 값: 7
        - JS에서 URL매개변수를 호출하는 방법
            1. let urlParams = new URL(location.href).searchParams;
            2. let value = urlParams.get('URL변수명')

    1. 현재 클릭된 게시물 번호를 찾는다.
    2. 해당 게시물 번호의 게시물을 검색한다.
    3. 검색된 결과를 HTML에 출력한다.

*/
// 1. new URL(검색할URL) : URL(주소)의 정보 호출, location.href: 현재 URL
console.log(new URL(location.href));
// 2. new URL(location.href).searchParams : 쿼리스트링 (?뒤로 매개변수들)
console.log(new URL(location.href).searchParams);
// 3. new URL(location.href).searchParams.get('key')
console.log(new URL(location.href).searchParams.get('no'));
// ========================================================

// 1. 현재 url 경로상의 'no' 이름의 매개변수 값 호출, view.html?no=7
let urlParams = new URL(location.href).searchParams;
let no = urlParams.get('no'); // 클릭된 게시물 번호

let boardList = [];

// 2. 게시물 출력: js열렸을때
board();
function board() {
    console.log('board() 함수 진입');
    // 1. 어디에
    let boardBox = document.querySelector('#boardBox');
    // 2. 무엇을
    let html = ``;
    // 2-1. 모든 게시물 목록을 가져온다.
    boardList = JSON.parse(localStorage.getItem('글목록'));
    if (boardList == null) {
        boardList = [];
    }
    // 2-2. 모든 게시물 목록에서 클릭된 게시물 번호와 일치한 게시물 찾기 
    let findIndex = -1;
    for (let i = 0; i < boardList.length; i++) {
        if (boardList[i].번호 == no) {
            findIndex = i;
            break;
        }
    }
    boardList[findIndex].조회수++;
    localStorage.setItem('글목록', JSON.stringify(boardList));
    html += `
        <div>${boardList[findIndex].제목}</div>
        <div>${boardList[findIndex].내용}</div>
        <div>${boardList[findIndex].번호}</div>
        <div>${boardList[findIndex].작성자}</div>
        <div>${boardList[findIndex].작성일}</div>
        <div>${boardList[findIndex].조회수}</div>
    `;
    // 3. 출력 
    boardBox.innerHTML = html;
}

// 3. 삭제 : 삭제 버튼을 클릭했을때
// 단, 현재 로그인된 회원과 게시물 작성자와 일치할 경우에만
function _delete() {
    console.log('_delete() 함수 진입');
    let findBoardIndex = -1;
    for (let i = 0; i < boardList.length; i++) {
        if (boardList[i].번호 == no) {
            findBoardIndex = i;
            break;
        }
    }

    if (myBoardCheck(findBoardIndex) == false) {
        alert('해당 게시물의 작성자만 수정 가능합니다.');
        return;
    }

    //삭제 
    boardList.splice(findBoardIndex, 1);
    localStorage.setItem('글목록', JSON.stringify(boardList));
    alert('삭제 성공');
    location.href = 'board.html';
    return;
}

//  4. 수정페이지로 이동함수 
// 로그인된 회원, 게시물 작성자 일치 여부
function modify() {
    let findBoardIndex = -1;
    for (let i = 0; i < boardList.length; i++) {
        if (boardList[i].번호 == no) {
            findBoardIndex = i;
            break;
        }
    }

    if (myBoardCheck(findBoardIndex) == false) {
        alert('해당 게시물의 작성자만 수정 가능합니다.');
        return;
    }

    // 무엇을 수정할건지 매개변수 전달 
    location.href = `modify.html?no=${no}`;
}

// 5. 현재 로그인된 회원의 글인지 유효성 함수
function myBoardCheck(findBoardIndex) {
    // ===========================================
    // 1. 로그인 상태 체크 
    let loginNo = JSON.parse(sessionStorage.getItem('loginNo'));
    if (loginNo == null) {
        return false;
    }

    // 2. 로그인된 회원아이디와 게시물작성자 아이디와 다르면 실패 
    let memberList = [];
    memberList = JSON.parse(localStorage.getItem('회원가입리스트'));
    if (memberList == null) {
        memberList = [];
    }

    for (let i = 0; i < memberList.length; i++) {
        console.log(memberList[i].id);
        console.log(boardList[findBoardIndex].작성자);
        if (memberList[i].no == loginNo && memberList[i].id == boardList[findBoardIndex].작성자) {
            return true;
        }
    }
    return false;
}