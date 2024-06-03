/*
    회원 비밀번호 수정 페이지
        1. 현재 로그인된 회원의 비밀번호를 수정 처리
        2. 현재 비밀번호를 입력받고 새로운 비밀번호를 2번 입력받기 
        3. 유효성 검사 
            1. 입력받은 현재 비밀번호가 로그인된 회원의 비밀번호와 일치하는지 체크 
            2. 새로운 비밀번호와 새로운 비밀번호 확인 일치하는지 체크 
            3. 비밀번호는 5글자 이상만 가능
        4. 만일 수정 성공하면 로그아웃 처리
*/

let memberList = [];

// 수정 버튼을 클릭했을때
function changePW() {
    let curPW = document.querySelector('#curPW').value;
    let newPW = document.querySelector('#newPW').value;
    let newPWr = document.querySelector('#newPWr').value;

    // 세션 저장소에서 loginNo 받아오기
    // sessionStorage.getItem('loginNo');
    let loginNo = sessionStorage.getItem('loginNo');
    // 로컬 스토리지 로딩 
    memberList = JSON.parse(localStorage.getItem('회원가입리스트'));
    if (memberList == null) {
        memberList = [];
    }

    // 로컬스토리지에서 loginNo와 같은 회원번호 찾기
    let findResult = false; // for문 내에서 특정 조건의 충족여부를 저장하느 ㄴ변수 
    let findIndex = 0; // 현재 로그인된 회원의 회원목록 인덱스 번호
    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i];
        if (member.no == loginNo && curPW == member.pw) {
            findResult = true; // 특정 조건을 찾았을때 변수에 값 변화 
            findIndex = i; // 특정 조건에 충족하는 memberList의 인덱스 번호 저장 
            break;
        }
    }

    if (findResult == false) {
        alert('회원의 비밀번호가 일치하지 않습니다');
        return;
    }

    if (newPW.length < 5 || newPWr.length < 5) {
        alert('새로운 비밀번호는 5글자 이상으로 해주세요.');
        return;
    }
    if (newPW != newPWr) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
    }

    // 수정처리 
    // 누구를 [findIndex]
    memberList[findIndex].pw = newPW;
    // 로컬스토리지에 다시 저장
    localStorage.setItem('회원가입리스트', JSON.stringify(memberList));
    sessionStorage.clear('loginNo');

    // 4. 안내후 로그아웃
    alert('비밀번호가 수정되었습니다. 다시 로그인 해주세요.');
    location.href = 'login.html';
    return;

}