let 회원정보 = [];

function 회원등록() {
    let signupID = document.querySelector('#signupID').value;
    let signupPW = document.querySelector('#signupPW').value;
    let infoMsg = '';

    if (회원정보.length >= 0) {
        for (let i = 0; i < 회원정보.length; i++) {
            if (회원정보[i].아이디 == signupID) {
                infoMsg = "이미 가입된 아이디입니다.";
                document.querySelector('#infoMsg').innerHTML = infoMsg;
                return;
            }
        }
        회원정보.push({ 아이디: signupID, 비밀번호: signupPW });
        infoMsg = "가입되었습니다.";
        document.querySelector('#infoMsg').innerHTML = infoMsg;
    }
    document.querySelector('#signupID').value = '';
    document.querySelector('#signupPW').value = '';
}

function 로그인() {
    const loginID = document.querySelector('#loginID').value;
    const loginPW = document.querySelector('#loginPW').value;
    let infoMsg = '';

    for (let i = 0; i < 회원정보.length; i++) {
        if (loginID == 회원정보[i].아이디 && loginPW == 회원정보[i].패스워드) {
            infoMsg = '로그인 성공했습니다.';
            document.querySelector('#infoMsg').innerHTML = infoMsg;
            return;
        } else if (loginID == 회원정보[i].아이디 && loginPW != 회원정보[i].패스워드) {
            infoMsg = '비밀번호가 다릅니다.';
            document.querySelector('#infoMsg').innerHTML = infoMsg;
            return;
        } else {
            infoMsg = '없는 아이디입니다.';
            document.querySelector('#infoMsg').innerHTML = infoMsg;
        }
    }
}
