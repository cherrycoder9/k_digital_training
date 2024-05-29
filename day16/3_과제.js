// 1. new Date(): 현재 날짜/시간 객체 반환
console.log(new Date());
// 2. 현재 연도 
console.log(new Date().getFullYear());
// 3. 현재 월 - 0부터 시작함
console.log(new Date().getMonth());
// 4. new Date(연도, 월, 일) 사용자 정의 날짜 객체 반환
console.log(new Date(2024, 4, 1)); // 5월 1일 나옴
console.log(new Date(2024, 4, 0)); // 4월 말일이 나옴
// 4. 현재 일
console.log(new Date);
// 5. 현재 요일
console.log(new Date().getDay());

// -------- 모든 함수에서 사용할 변수 : 전역변수 --------
// 1
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let currentIndex = 7;
// 2. 객체1개 <--> 일정1개,     배열1개 <--> 여러개 일정(객체)
let contentList = [
    { content: '대출받기', date: '2024-5-5', color: '#3AB77A', indexNum: 0 },
    { content: '수학공부', date: '2024-5-10', color: 'cornflowerblue', indexNum: 1 },
    { content: '학원방문', date: '2024-5-12', color: '#F03E37', indexNum: 2 },
    { content: '책보기', date: '2024-5-13', color: 'darkkhaki', indexNum: 3 },
    { content: '코인투자', date: '2024-5-21', color: '#B5BBC7', indexNum: 4 },
    { content: '코딩하기', date: '2024-5-21', color: 'yellow', indexNum: 5 },
    { content: '산책하기', date: '2024-5-21', color: 'orange', indexNum: 6 },
    { content: '스터디카페 청소', date: '2024-5-28', color: 'aquamarine', indexNum: 7 },
];




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
    let html = `<div>일</div><div>월</div><div>화</div><div>수</div>
                <div>목</div><div>금</div><div>토</div>`;
    //       1. year, month 변수에 저장된 날짜의 말일 구하기
    let date = new Date(year, month, 0); // 0 넣으면 전 달의 말일이기 때문에 -1을 안해도 됨 
    let endDay = date.getDate();
    // 2. year, month 변수에 저장된 날짜의 1일 요일 구하기 (1일 요일 앞에 공백)
    let date2 = new Date(year, month - 1, 1);
    let startWeek = date2.getDay();
    // console.log(startWeek); // 일요일 0부터 시작함, 월1 화2
    // 1일의 요일까지 공백 출력 반복문 
    for (let b = 1; b <= startWeek; b++) {
        html += `<div></div>`;
    }

    // 1일부터 말일까지 일수 출력 반복문 
    for (let day = 1; day <= endDay; day++) {
        // 현재 반복되고 있는 날짜의 형식(연도-월-일) 만들기
        let date3 = `${year}-${month}-${day}`;

        let dayHtml = ''; // 일 마다의 일정 내용물 
        // 일정목록에 date3과 동일한 날짜가 있는지 
        for (let i = 0; i < contentList.length; i++) {
            // console.log(contentList[i]);
            // console.log(contentList[i].date == date3);
            if (contentList[i].date == date3) {
                dayHtml += `<div style="background-color: ${contentList[i].color}">${contentList[i].content}<button onclick="삭제하기(${contentList[i].indexNum})">삭제</button></div>`;
            }
        }
        html += `<div><b>${day}</b> ${dayHtml}</div>`;
    }
    // 3. 출력 
    // 현재 day 출력과 day와 일치한 일정날짜의 일정내용 출력
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

function 등록하기() {
    ++currentIndex;
    let 입력색상 = document.querySelector('#inputColor').value;
    let 입력날짜 = document.querySelector('#inputDate').value;
    let 입력할일 = document.querySelector('#inputTodo').value;

    let 입력년 = String(Number(입력날짜.split('-')[0]));
    let 입력월 = String(Number(입력날짜.split('-')[1]));
    let 입력일 = String(Number(입력날짜.split('-')[2]));
    contentList.push({ content: 입력할일, date: `${입력년}-${입력월}-${입력일}`, color: 입력색상, indexNum: currentIndex });
    // console.log(입력색상);
    // console.log(입력날짜);
    // console.log(입력할일);
    calPrint();
};

function 삭제하기(번호) {
    for (let i = 0; i < contentList.length; i++) {
        console.log(contentList);
        console.log(contentList[i].indexNum);
        console.log(번호);
        // break;
        if (contentList[i].indexNum == 번호) {
            // delete contentList[i];
            contentList.splice(contentList.indexOf(contentList[i].indexNum), 1);
        }
    }
    calPrint();
}