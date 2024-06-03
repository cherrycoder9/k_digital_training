/*
    내정보 페이지
        1. 현재 로그인된 회원의 번호, 아이디, 이름, 연락처를 출력
        2. 회원탈퇴 버튼을 클릭하면 confirm 함수 활용해서 확인 선택시 탈퇴처리
        * 로그인된 회원 번호가 세션 저장소 사용 
        * 탈퇴시 로그아웃 처리 
*/

let memberList;
내정보출력();
function 내정보출력() {
    // loginNo를 세션스토리지에서 받아온다
    let loginNo = sessionStorage.getItem('loginNo');
    // 만약에 해당 세션 저장소에 현재 로그인된 회원번호가 없으면
    if (loginNo == null) {
        alert('로그인후 가능한 페이지입니다.');
        location.href = 'login.html';
    }

    // 로컬스토리지에서 loginNo (=member.no)인 객체를 찾는다.
    memberList = JSON.parse(localStorage.getItem('회원가입리스트'));
    if (memberList == null) {
        memberList = [];
    }
    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i];
        if (member.no == loginNo) {
            document.querySelector('#myid').innerHTML = member.id;
            document.querySelector('#myname').innerHTML = member.name;
            document.querySelector('#myphone').innerHTML = member.phone;
            findIndex = i;
            break;
        }

    }
}

// 2. 회원탈퇴 버튼을 클릭했을때
// 2. 회원탈퇴 버튼을 클릭하면 confirm 함수 활용해서 확인 선택시 탈퇴처리;
function 회원탈퇴() {
    console.log('회원탈퇴() 함수 진입');

    // 1. 정말 탈퇴 하는지 확인받기 
    let msg = confirm("탈퇴 하시겠습니까?");
    // 2. 취소했으면
    if (msg == false) {
        return;
    }

    // 3. 확인했으면 탈퇴처리 진행
    // 1. 누구를 (현재 로그인된 회원)
    let loginNo = sessionStorage.getItem('loginNo');
    // 2. 해당 logonNo의 회원객체 찾기
    // 1. 회원목록 내에서 로그인된 회원번호와 동일한 회원찾기 
    for (let i = 0; i < memberList.length; i++) {
        // 만약에 회원목록내 i번째 회원객체내 번호와 로그인된 회원번호와 같으면 
        if (memberList[i].no == loginNo) {
            // 찾은 i번째 인덱스의 회원객체를 회원목록에서 삭제 
            memberList.splice(i, 1);
            // 회원목록/배열의 변화가 있기 때문에 localStrorage에 적용하기 위해 setItem 사용 
            localStorage.setItem('회원가입리스트', JSON.stringify(memberList));
            // 1번만 탈퇴하기 때문에 탈퇴했을 경우 다음 반복문을 실행할 필요 없음
            alert('회원탈퇴 했습니다.');
            break;
        }
    }
    logout(); // index.js 파일에 있는 로그아웃 함수 호출
}

// 3. 수정페이지 이동
function update() {
    location.href = "update.html";
}