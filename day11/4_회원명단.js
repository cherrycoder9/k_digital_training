// console.log('등록()');
// 1. 함수 선언
// function 등록() {

// }
// 2. (클릭) 이벤트가 함수 호출 하는데 확인 작업
// function 등록() {
//     console.log('등록()');
// }

// 3. 로직(함수안에서 처리할 코드) 작성
let nameList = [];
function 등록() {
    // [입력] 1. HTML INPUT에 입력된 값을 가져온다.
    let input = document.querySelector('#name');
    let name = input.value;
    // [처리] 2. 입력받은 값을 배열에 저장한다. *배열내 데이터는 전역
    if (nameList.indexOf(name) != -1) { // 유효성검사: 중복체크
        alert('이미 등록된 이름입니다.');
    } else if (name.length != 3) { // 유효성검사: 3글자인지 체크
        alert('회원명은 3글자만 입력됩니다.');
    } else if (!isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])) { // 유효성검사: 숫자있는지 체크
        alert('회원명에 숫자를 포함할 수 없습니다.');
    } else {
        nameList.push(name);
        출력();
    }
    input.value = '';
}

// 삭제 함수
function 삭제() {
    // [입력] 1.
    let name = document.querySelector('#name').value;
    // [처리] 2.
    let deleteIndex = nameList.indexOf(name);
    // 삭제 유효성 검사
    if (deleteIndex != -1) {
        nameList.splice(deleteIndex, 1);
    } else {
        alert("없는 회원입니다.");
    }
    출력();
    name = '';
}

function 출력() {
    // [출력] 3.
    // [출력] 3. 배열내 데이터를 HTML table에 출력
    // [3-1 어디에]
    let nameTable = document.querySelector('#nameTable');
    // [3-2 무엇을]
    let html = `
        <tr>
            <th>번호</th>
            <th>이름</th>
        </tr>
        `;
    for (let i = 0; i < nameList.length; i++) {
        html += `
        <tr>
            <td>${i + 1}</td>
            <td>${nameList[i]}</td>
        </tr>
        `;
    }
    // [3-3 출력]
    nameTable.innerHTML = html;
}

// 과제 조건
// 1. 등록시 중복 제외
// 2. 회원명은 3글자만 가능
// 3. 회원명 숫자 제외
// 4. 동일한 회원명이 있을때만 삭제하고 없으면 삭제 안함
