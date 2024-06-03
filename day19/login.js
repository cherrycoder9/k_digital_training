/* 
    로그인 페이지
        1. 아이디와 비밀번호를 입력받아 기존 회원 목록에 일치한 정보 찾기
        2. 로그인 성공시:
            0. 결과 안내
            1. 세션저장소에 로그인 성공 여부(회원번호) 저장하기
            2. 메인(index.html)페이지로 이동하기
        3. 로그인 실패시:
            0. 결과 안내 

    * 단 회원 목록은 localStorage 사용할 것
    * 단 로그인 성공은 세션 
*/


memberList = [];

function 로그인하기() {
    console.log(`로그인하기() 함수 진입`);

    // 0. 아이디와 비밀번호를 입력받아 기존 회원 목록에 일치한 정보 찾기
    memberList = JSON.parse(localStorage.getItem('회원가입리스트'));
    if (memberList == null) {
        memberList = [];
    }

    // 1. html에서 입력받은 데이터 가져온다 
    let loginInputID = document.querySelector('#loginInputID').value;
    let loginInputPW = document.querySelector('#loginInputPW').value;

    // 2. 기존 회원목록에 있는 회원정보와 입력받은 데이터 일치 여부 
    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i];
        if (member.id == loginInputID && member.pw == loginInputPW) {
            console.log('로그인 성공');
            // 만약에 로그인 성공하면 해당 회원의 번호를 세션저장소 부여 
            sessionStorage.setItem('loginNo', member.no);
            location.href = "index.html"; // JS에서 페이지전환 해주는 속성
            return;
        }
    }
    alert('로그인 실패');




}


/* 
    로그인 페이지
        1. 아이디와 비밀번호를 입력받아 기존 회원 목록에 일치한 정보 찾기
        2. 로그인 성공시:
            0. 결과 안내
            1. 세션저장소에 로그인 성공 여부(회원번호) 저장하기
            2. 메인(index.html)페이지로 이동하기
        3. 로그인 실패시:
            0. 결과 안내 

    * 단 회원 목록은 localStorage 사용할 것
*/