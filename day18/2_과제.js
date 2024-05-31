let 인사리스트 = [];
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