// 번호    제목    작성자(아이디)  작성일  조회수

let contentList = [];
let memberList = [];
function 글등록하기() {
    let inputTitle = document.querySelector('#inputTitle').value;
    let inputContent = document.querySelector('#inputContent').value;

    if (!inputTitle || !inputContent) {
        alert('제목과 내용을 모두 입력해주세요.');
        document.querySelector('#inputTitle').focus();
        return;
    }

    // 멤버리스트 불러오기
    memberList = JSON.parse(localStorage.getItem('회원가입리스트'));
    if (memberList == null) {
        memberList = [];
    }
    // 현재 로그인된 loginNo 불러와 작성자 id 구하기 위한 인덱스 찾기  
    let loginNo = sessionStorage.getItem('loginNo');
    let findIndex = 0;
    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].no == loginNo) {
            findIndex = i;
            break;
        }
    }

    // 날짜 구하기
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? ('0' + month) : month;
    let day = date.getDate();
    day = day < 10 ? ('0' + day) : day;
    let writeDay = `${year}-${month}-${day}`;
    console.log(writeDay);

    // 글 번호 부여하기
    contentList = JSON.parse(localStorage.getItem('글목록'));
    if (contentList == null) {
        contentList = [];
    }
    // 만약에 글목록에 글이 없으면 1, 있으면 마지막 글번호의 번호 + 1
    let contentNo = contentList.length == 0 ? 1 : contentList[contentList.length - 1].번호 + 1;
    // 객체화 
    let myContent = { 번호: contentNo, 제목: inputTitle, 내용: inputContent, 작성자: memberList[findIndex].id, 작성일: writeDay, 조회수: 0 };
    // 저장
    contentList.push(myContent);
    console.log(contentList);

    // 로컬 스토리지에 저장하기
    localStorage.setItem('글목록', JSON.stringify(contentList));
    alert('글 등록이 완료되었습니다.');
    location.href = 'board.html';

    // console.log(inputTitle);
    // console.log(inputContent);



}