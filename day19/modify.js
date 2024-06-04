/*
    수정페이지
        1. URL 매개변수/쿼리스트링의 게시물번호(no) 호출
        2. 해당 게시물번호의 title, content 정보를 html 대입
        3. 새롭게 입력받은 값 수정처리 
*/

// 1. 현재 수정할 게시물의 번호를 URL 쿼리스트링에서 호출
let no = new URL(location.href).searchParams.get('no');
console.log(no);

// 2. 수정할 게시물의 기존 내용물을 넣어주는 함수: JS 열렸을때 
let boardList = [];
let findIndex = -1;
board();
function board() {
    // 1. 
    boardList = JSON.parse(localStorage.getItem('글목록'));
    if (boardList == null) {
        boardList = [];
    }
    // 2. 
    for (let i = 0; i < boardList.length; i++) {
        if (boardList[i].번호 == no) {
            // 3.
            console.log(boardList[i].제목);
            console.log(boardList[i].내용);
            document.querySelector('#title').value = boardList[i].제목;
            document.querySelector('#content').value = boardList[i].내용;
            findIndex = i;
            return;
        }

    }
}

// 3. 수정함수: 수정 버튼을 클릭했을때
function modify() {
    // 어디서
    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;

    if (!title || !content) {
        alert('내용을 입력해주세요.');
        return;
    }

    // 무엇을 
    boardList[findIndex].제목 = title;
    boardList[findIndex].내용 = content;

    // 저장
    localStorage.setItem('글목록', JSON.stringify(boardList));

    // 이동
    alert('수정되었습니다.');
    location.href = `view.html?no=${no}`;
}