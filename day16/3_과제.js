// 1. new Date(): 현재 날짜/시간 객체 반환
console.log(new Date());
// 2. 현재 연도 
console.log(new Date().getFullYear());
// 3. 현재 월 - 0부터 시작함
console.log(new Date().getMonth());
// 4. new Date(연도, 월, 일) 사용자 정의 날짜 객체 반환
console.log(new Date(2024, 4, 1)); // 5월 1일 나옴
console.log(new Date(2024, 4, 0)); // 4월 말일이 나옴 

// -------- 모든 함수에서 사용할 변수 : 전역변수 --------
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;

// 1. 출력함수 : 실행조건
//      페이지가 열렸을때, 월이 변경되었을때 
calPrint();
function calPrint() {


    // ------------ 상단 ------------
    // 1. 어디에
    let 어디에 = document.querySelector('#caltop > h5');
    // 2. 무엇을 
    let 무엇을 = `${year}년 ${month}월`;
    // 3. 출력
    어디에.innerHTML = 무엇을;

    // ------------ 캘린더 ------------
    // 1. 어디에
    let calendar = document.querySelector('#calendar');
    // 2. 무엇을    202405 기준 31일까지 있어서 31개 div 필요 
    let html = '';
    for (let day = 1; day <= 31; day++) {
        html += `<div>${day}</div>`;
    }
    // 3. 출력 
    calendar.innerHTML = html;

}

// 2. 월 변경함수 : 실행조건 
//      화살표 버튼 클릭했을때 
function monthChange(매개변수) {

    // 만약에 이전 버튼을 클릭하면 월에서 1차감 
    if (매개변수 == '이전') { // 만일 월이 0이면 12 대입하고 연도는 1차감 
        month = month - 1;
        if (month == 0) {
            month = 12;
            year--;
        }
        // 아니고 만약에 다음 버튼을 클릭하면 월에서 1증가 
    } else if (매개변수 == '다음') {
        month = month + 1;
        if (month == 13) {
            month = 1;
            year++;
        }
    }
    // 연도와 월이 변경 되었으므로 출력 새로고침
    calPrint();
}