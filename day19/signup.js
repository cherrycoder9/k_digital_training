/*
    - 회원가입 페이지
        1. 회원정보: 회원번호, 아이디, 비밀번호, 이름, 연락처
        2. 입력사항: 아이디, 비밀번호, 비밀번호 확인란, 이름, 연락처
        3. 유효성검사: 
            1. 아이디와 비밀번호는 5글자 이상만 가능하도록 
            2. 이름은 3글자 이상만 가능 
            3. 연락처는 '-' 제외한 8글자
            4. 비밀번호와 비밀번호 확인 일치 했을때만 가능
            5. 아이디와 연락처는 중복 제외 

        * 회원번호는 자동 부여됩니다.
        * 회원목록은 localStorage에 저장할 것
*/

// 1. 회원가입 함수: 회원가입 버튼을 클릭했을때
function signup() {
    console.log("signup() 함수 실행됨");

    // 1. html에서 입력받은 데이터 가져와서
    let inputID = document.querySelector('#inputID').value;
    let inputPW = document.querySelector('#inputPW').value;
    let inputPWr = document.querySelector('#inputPWr').value;
    let inputName = document.querySelector('#inputName').value;
    let inputPhone = document.querySelector('#inputPhone').value;

    // 2. 유효성검사 - 1. 아이디는 5글자 이상 
    if (inputID.length < 5) {
        alert("아이디는 5글자 이상이어야 합니다.");
        document.querySelector('#inputID').value = "";
        return;
    }
    // 2. 유효성검사 - 1. 비밀번호는 5글자 이상 
    if (inputPW.length < 5) {
        alert("비밀번호는 5글자 이상이어야 합니다.");
        document.querySelector('#inputPW').value = "";
        document.querySelector('#inputPWr').value = "";
        return;
    }
    // 2. 유효성검사 - 이름은 3글자 이상만 가능 
    if (inputName.length < 3) {
        alert("이름은 3글자 이상이어야 합니다.");
        document.querySelector('#inputName').value = "";
        return;
    }
    // 2. 유효성검사 - 3. 연락처는 '-' 제외한 8글자
    if (inputPhone.indexOf('-') >= 0) {
        alert("'-' 없이 입력해 주세요.");
        document.querySelector('#inputPhone').value = "";
        return;
    }
    if (inputPhone.length != 8 || isNaN(inputPhone)) {
        alert("연락처는 8글자여야 합니다.");
        document.querySelector('#inputPhone').value = "";
        return;
    }

    // 2. 유효성검사 - 4. 비밀번호와 비밀번호 확인 일치 했을때만 가능;
    if (inputPW != inputPWr) {
        alert("비밀번호와 확인란이 일치하지 않습니다.");
        document.querySelector('#inputPW').value = "";
        document.querySelector('#inputPWr').value = "";
        return;
    }
    // 2. 유효성검사 - 5. 아이디와 연락처는 중복 제외 
    if (member == null) {
        member = [];
    }
    for (let i = 0; i < member.length; i++) {
        const element = array[i];
        for (const iterator of object) {

        }
    }


    // 3. 데이터 가공 
    let member = {
        no: 1, id: inputID, pw: inputPW, name: inputName, phone: inputPhone,
    }; console.log(member);

    // 4. 저장

    // 5. 결과 안내 
}