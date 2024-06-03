/*
    모든 글 출력 페이지 (board.html) 화면 구성
    
    글쓰기 버튼
    번호    제목    작성자(아이디)  작성일  조회수  <---- table

    ----------------------------------------------------------
    write.html: board.html에서 글쓰기 버튼 클릭시 이동
    1. 만일 비로그인 상태이면 글쓰기 페이지 접근 제한하고 안내후 login.html 이동
    2. 만일 로그인 상태이면 제목과 내용을 입력받아 글쓰기 처리
*/

contentList = [];
글출력();
function 글출력() {
    console.log('글출력() 함수 진입');
    contentList = JSON.parse(localStorage.getItem('글목록'));
    if (contentList == null) {
        contentList = [];
    }

    let html = '';
    for (let i = 0; i < contentList.length; i++) {
        html += `
            <tr>    
                <td>${contentList[i].번호}</td >
                <td>${contentList[i].제목}</td >
                <td>${contentList[i].작성자}</td >
                <td>${contentList[i].작성일}</td >
                <td>${contentList[i].조회수}</td >
            </tr >
            `;
    }
    document.querySelector('#showContents').innerHTML = html;
}

function 글쓰기() {
    // 비로그인 상태이면 글쓰기 페이지 접근 제한 안내후 login.html 이동
    // 세션스토리지에서 loginNo 값 받아옴 
    let loginNo = sessionStorage.getItem('loginNo');
    if (loginNo == null) {
        alert('로그인해야 글 작성이 가능합니다.');
        location.href = 'login.html';
        return;
    } else {
        // 로그인 상태이면 write.html 이동후 제목과 내용을 입력받아 글쓰기 처리
        location.href = 'write.html';
    }
};