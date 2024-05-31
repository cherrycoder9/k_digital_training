let 인사리스트 = [];
let depList = [];
let 배정부서리스트 = [];

function 인사등록() {
    console.log('인사등록() 불러오기 OK');
    let 인사번호 = 인사리스트.length != 0 ? 인사리스트.length : 0;
    let 이름 = document.querySelector(`#hrName`).value;
    let 생년 = document.querySelector(`#hrBirth`).value;
    if (이름 == "" || 생년 == "") {
        alert("정보를 입력하세요");
        return;
    }

    console.log('이름, 생년', 이름, 생년);

    인사리스트.push({ 인사번호: 인사번호, 이름: 이름, 생년: 생년 });
    console.log('인사리스트', 인사리스트);
    console.log('인사번호', 인사번호);

    인사출력();
}

function 인사출력() {
    console.log('인사출력() 불러오기 OK');

    let 인사리스트화면저장 = ``;
    console.log('인사리스트화면저장');

    for (let i = 0; i < 인사리스트.length; i++) {
        인사리스트화면저장 += `
            <tr>
                <td>${인사리스트[i].인사번호}</td>
                <td>${인사리스트[i].이름}</td>
                <td>${인사리스트[i].생년}</td>
            </tr>
        `;
    }
    console.log('인사리스트', 인사리스트);

    document.querySelector(`#hrList`).innerHTML = 인사리스트화면저장;
}

// 부서정보 추가 함수
function 부서등록() {
    let depNum = depList.length != 0 ? depList.length : 0;
    let depNameInput = document.querySelector('#depName').value;
    let depPhoneInput = document.querySelector('#depPhone').value;

    if (depNameInput == "" || depPhoneInput == "") {
        alert('정보를 모두 입력하세요.');
        return;
    }

    let depInform = { depNum: depNum, depName: depNameInput, depPhone: depPhoneInput };

    depList.push(depInform);

    부서출력();
}

// 부서정보 출력 함수
function 부서출력() {
    let depListTable = document.querySelector('#depList');
    let html = '';

    for (let i = 0; i < depList.length; i++) {
        html += `
                <tr>
                    <td>${depList[i].depNum}</td>
                    <td>${depList[i].depName}</td>
                    <td>${depList[i].depPhone}</td>
                </tr>
                `;
    }

    depListTable.innerHTML = html;
    console.log('부서출력 성공');
}

function 부서배정하기() {
    console.log('부서배정하기() 불러오기 OK');
    let 배정부서번호 = 배정부서리스트.length != 0 ? 배정부서리스트.length : 0;
    console.log('배정부서번호', 배정부서번호);
    let 날짜 = document.querySelector(`#assignDate`).value;
    console.log('날짜', 날짜);
    let 직책 = document.querySelector(`#duty`).value;
    console.log('직책', 직책);
    let 인사번호 = document.querySelector(`#hrNum`).value;
    console.log('인사번호', 인사번호);
    let 부서번호 = document.querySelector(`#depNum`).value;
    console.log('부서번호', 부서번호);

    if (날짜 == "" || 직책 == "" || 인사번호 == "" || 부서번호 == "") {
        alert('정보를 모두 입력하세요.');
        return;
    }

    if (인사번호 > 인사리스트.length || 인사리스트 == null) {
        alert('존재하지 않는 인사번호입니다.');
    }
    if (부서번호 > depList.length || depList == null) {
        alert('존재하지 않는 부서번호입니다.');
    }

    배정부서리스트.push({ 배정부서번호: 배정부서번호, 배정일: 날짜, 직책: 직책, 인사번호: 인사번호, 부서번호: 부서번호 });

    배정부서출력();
}

function 배정부서출력() {
    if (인사리스트 == null) {
        alert('존재하지 않는 인사번호입니다.');
        return;
    }
    if (depList == null) {
        alert('존재하지 않는 부서번호입니다.');
        return;
    }

    let 배정부서리스트출력 = '';

    for (let i = 0; i < 배정부서리스트.length; i++) {
        // 배정번호, 이름(인사정보), 생년월일(인사정보), 부서명(부서정보), 연락처(부서정보), 배정일, 직책 
        배정부서리스트출력 += `
            <tr>
                <td>${배정부서리스트[i].배정부서번호}</td>
                <td>${인사리스트[배정부서리스트[i].인사번호].이름}</td>
                <td>${인사리스트[배정부서리스트[i].인사번호].생년}</td>
                <td>${depList[배정부서리스트[i].부서번호].depName}</td>
                <td>${depList[배정부서리스트[i].부서번호].depPhone}</td>
                <td>${배정부서리스트[i].배정일}</td>
                <td>${배정부서리스트[i].직책}</td>
            </tr>
        `;
    }
    document.querySelector(`#printAssignedDepList`).innerHTML = 배정부서리스트출력;
}


