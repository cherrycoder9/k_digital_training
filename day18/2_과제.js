let 인사리스트 = [];
let depList = [];
let 인사번호 = 0;





function 인사등록() {
    console.log('인사등록() 불러오기 OK');
    let 이름 = document.querySelector(`#hrName`).value;
    let 생년 = document.querySelector(`#hrBirth`).value;
    console.log('이름, 생년', 이름, 생년);

    인사리스트.push({ 인사번호: 인사번호, 이름: 이름, 생년: 생년 });
    console.log('인사리스트', 인사리스트);
    인사번호++;
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
                <td><button id="인사번호${인사리스트[i].인사번호}" onclick="${인사리스트[i].인사번호}">선택</button></td>
            </tr>
        `;
    }
    console.log('인사리스트', 인사리스트);

    document.querySelector(`#hrList`).innerHTML = 인사리스트화면저장;
}

function 부서배정하기() {
    console.log('부서배정하기() 불러오기 OK');
    let 날짜 = document.querySelector(`#test1`).value;
    console.log('날짜', 날짜);
    let 직책 = document.querySelector(`#test2`).value;
}

// 부서정보 추가 함수
function 부서등록() {
    let depNum = depList.length != 0 ? depList.length : 0;
    let depNameInput = document.querySelector('#depName').value;
    let depPhoneInput = document.querySelector('#depPhone').value;
    let depInform = { depNum: depNum, depName: depNameInput, depPhone: depPhoneInput };

    depList.push(depInform);

    alert('부서 등록 성공');

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
                    <td><button>선택</button></td>
                </tr>
                `;
    }

    depListTable.innerHTML = html;
    console.log('부서출력 성공');
}


function 배정부서출력() {

}


