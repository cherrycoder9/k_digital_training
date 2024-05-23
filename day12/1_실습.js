/*
    실습1: 회원가입과 로그인 구현
        [요구사항] 
        0. 객체없이 배운것으로 구현 
        1. 아이디와 비밀번호를 입력받아 회원가입 처리 해주세요.
        2. 아이디와 비밀번호가 기존 데이터와 일치했을때 로그인 성공 아니면 실패

        [개발순서도]
        요구사항 분석
            1. 회원가입: 저장 C
            2. 로그인: 기존 데이터와 비교 R, 논리
            3. 회원수정: U
            4. 회원탈퇴: D

        (백엔드)
        1. 메모리 구성 
            아이디와 비밀번호를 저장하는 저장소 (C)
            let idList = []
            let pwList = []
        2. 기능/서비스 구성
            1. 회원가입 처리 == 함수
                signup
                [로직 순서도]
                    1. 아이디/비밀번호 입력받는다.
                    2. 입력받은 데이터를 각 배열에 저장한다.
                    3. 안내 메시지
            2. 로그인 처리 == 함수
                login
                [로직 순서도]
                    1. 아이디/비밀번호 입력받는다.
                    2. 입력받은 데이터를 배열 내 존재하는지 비교 
                    3. 안내 메시지
        3. 함수 구현 

        (프론트엔드)
        1. 회원가입 화면
            1. 아이디 input, 비밀번호 input
            2. 회원가입 처리 button
        2. 로그인 화면
            1. 아이디 input, 비밀번호 input
            2. 회원가입 처리 button
        3. 각 페이지 꾸미기 

        (백엔드/프론트엔드 연동)
        각 button에 JS 함수 연동 
*/

// 1. 메모리 구성
let idList = [];
let pwList = [];

// 2. 회원가입 함수 구성
function signup() {
    // 2-1
    let signupId = document.querySelector('#signupId');
    let signupPw = document.querySelector('#signupPw');
    // 2-2
    let id = signupId.value;
    let pw = signupPw.value;
    // 2-3 입력받은 데이터를 각 배열에 저장한다.
    idList.push(id);
    pwList.push(pw);
    // 3-4 안내 메시지
    alert('회원가입 성공');
}

// 2. 로그인 함수 구성
function login() {
    // 2-1
    let loginId = document.querySelector('#loginId');
    let loginPw = document.querySelector('#loginPw');
    // 2-2
    let id = loginId.value;
    let pw = loginPw.value;
    // 3-3 비교
    // 3-1 아이디가 기존 배열 내 존재하는지 
    let index = idList.indexOf(id);
    if (index != -1) {
        // 3-2 아이디가 존재하면 패스워드 검증
        // 만약에 아이디가 위치한 인덱스의 패스워드도 위치한 인덱스의 패스워드가 입력받은 패스워드와 같으면 
        if (pwList[index] == pw) {
            alert('로그인 성공');
        } else {
            alert('패스워드가 다릅니다.');
        }
    } else {
        alert('없는 아이디 입니다.');
    }
}