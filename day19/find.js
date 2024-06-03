//     find.html(signup.html 복사);
// 1. 아이디 찾기
//     - 이름과 전화번호를 입력받아 일치한 정보 찾기
//     - 찾은 아이디를 특정한 div에 출력하시오.
// 2. 비밀번호 찾기
//     - 아이디와 연락처를 입력받아 일치한 정보 찾기
//     - 찾은 비밀번호를 특정 div에 출력하시오.

let dd = 'hi';
let memberList = [];

// 로컬스토리지에서 정보 받아오기 
memberList = JSON.parse(localStorage.getItem('회원가입리스트'));
if (memberList == null) {
    memberList = [];
}

function 아이디찾기() {
    console.log("아이디찾기() 함수 진입");
    let name = document.querySelector('#inputName').value;
    let phone = document.querySelector('#inputPhone').value;


    // 유효성 검사
    if (name.length < 5 || phone.length < 5) {
        alert('값을 제대로 입력해주세요.');
        document.querySelector('#inputName').value = "";
        document.querySelector('#inputName').focus();
        document.querySelector('#inputPhone').value = "";
        return;
    }

    // 입력받은 이름과 폰번호로 검색하기
    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i];
        if (member.name == name && member.phone == phone) {
            alert('아이디를 찾았습니다.');
            document.querySelector('#showID').innerHTML = member.id;
            return;
        }
    }
    alert('입력하신 정보로는 아이디를 찾을 수 없습니다.');
}

function 비번찾기() {
    console.log("비번찾기() 함수 진입");
    let id = document.querySelector('#inputID').value;
    let phone = document.querySelector('#inputPhone2').value;

    // 유효성 검사
    if (id.length < 5 || phone.length < 5) {
        alert('값을 제대로 입력해주세요.');
        document.querySelector('#inputID').value = "";
        document.querySelector('#inputID').focus();
        document.querySelector('#inputPhone2').value = "";
        return;
    }

    // 입력받은 이름과 폰번호로 검색하기
    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i];
        if (member.id == id && member.phone == phone) {
            alert('비밀번호를를 찾았습니다.');
            document.querySelector('#showPW').innerHTML = member.pw;
            return;
        }
    }
    alert('입력하신 정보로는 비밀번호를 찾을 수 없습니다.');
}