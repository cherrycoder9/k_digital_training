// 오늘 월을 받아오기
const 오늘날짜 = new Date();
let 오늘무슨년 = 오늘날짜.getFullYear();
let 오늘무슨월 = 오늘날짜.getMonth() + 1;
let 월최대일수 = new Date(오늘무슨년, 오늘무슨월, 0).getDate();
let 이번달시작요일 = new Date(오늘무슨년, 오늘무슨월 - 1, 1).getDay();

const 달력 = {
    년: 오늘무슨년,
    월: 오늘무슨월,
    총일수: 월최대일수,
    시작요일: 이번달시작요일,
    요일: ['일', '월', '화', '수', '목', '금', '토'],
};
console.log(달력.요일[달력.시작요일]);
function 화면갱신() {
    let 새년월표시 = '';
    let 새달력출력 = '';

    // 년 월 출력 
    새년월표시 = `${달력.년}년 ${달력.월}월`;

    // 달에 맞는 일 출력
    // 이번달 시작요일만큼 빈 div 생성 
    for (let i = 0; i < 달력.시작요일; i++) {
        console.log(달력.시작요일);
        새달력출력 += `<div></div>`;
    }
    // 해당 월의 총일수만큼 출력
    for (let i = 0; i < 달력.총일수; i++) {
        새달력출력 += `<div>${i + 1}</div>`;
    }

    document.querySelector('#displayDate').innerHTML = 새년월표시;
    document.querySelector('#refreshArea').innerHTML = 새달력출력;

    console.log(달력.년, 달력.월, 달력.총일수);
}
화면갱신();


function 다음달보기() {
    if (달력.월 < 12) {
        달력.월++;
    } else {
        달력.년++;
        달력.월 = 1;
    }
    달력.총일수 = new Date(달력.년, 달력.월, 0).getDate();
    달력.시작요일 = new Date(달력.년, 달력.월 - 1, 1).getDay();
    console.log(달력.요일[달력.시작요일]);
    화면갱신();
}

function 이전달보기() {
    if (달력.월 > 1) {
        달력.월--;
    } else {
        달력.년--;
        달력.월 = 12;
    }
    달력.총일수 = new Date(달력.년, 달력.월, 0).getDate();
    달력.시작요일 = new Date(달력.년, 달력.월 - 1, 1).getDay();
    console.log(달력.요일[달력.시작요일]);
    화면갱신();
}