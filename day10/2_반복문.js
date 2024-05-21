// 1. 사용자가 입력한번호 목록/배열
let 입력번호목록 = [];
// 2. 자동 생성된 번호 목록/배열
let 추첨번호목록 = [];

/* 
    3. 6개의 수를 입력받아 입력번호목록에 저장 
        조건: 1~45사이 숫자만 가능, 중복제외 
*/
for (let i = 1; i <= 6; i++) {
    let 입력번호 = Number(prompt(`${i}번째 숫자 입력`)); // 3-1 입력받고 변수에 저장

    if (입력번호 < 1 || 입력번호 > 45 || isNaN(입력번호)) {
        alert('선택할 수 없는 번호입니다.');
        i--; continue;
    }

    if (입력번호목록.indexOf(입력번호) != -1) {
        alert("이미 선택한 번호입니다.");
        i--; continue;
    }
    입력번호목록.push(입력번호);
}


// 4. 6개의 수를 난수/임의 생성해서 추첨번호목록에 저장
for (let i = 1; i <= 6; i++) {
    // Math.random() * 난수범위개수 + 시작번호
    let 생성번호 = parseInt(Math.random() * 45 + 1);
    if (추첨번호목록.indexOf(생성번호) >= 0) {
        i--; continue;
    }
    추첨번호목록.push(생성번호);
}

// 5. 두 배열의 동일한 숫자가 몇개인지
let sameNumber = 0;
for (let i = 0; i < 6; i++) {
    if (입력번호목록.indexOf(추첨번호목록[i]) >= 0) {
        sameNumber++;
    }
}
// console.log(`동일한 숫자는 ${sameNumber}개 입니다.`);

// 6. 출력
document.querySelector('#입력번호목록').innerHTML = 입력번호목록;
document.querySelector('#추첨번호목록').innerHTML = 추첨번호목록;
document.querySelector('#맞은개수').innerHTML = sameNumber;

