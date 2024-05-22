// for(let i in 배열명) : 인덱스를 꺼내와줌
// for(let i of 배열명) : 값을 꺼내와줌
// *스트림 반복 함수 : forEach(), map(), filter()

// 무한루프
// for(;;)
// while(true)

// 반복문 관련 키워드
// break;
// continue;

// 복습예제1: 특정 html(div#star1)에 ★을 5개 출력하시오
// * DOM 객체
// document.querySelector() : 특정 식별의 html 요소를 js 객체로 반환해주는 함수
// document.querySelector('#idName')
// document.querySelector('.className')
// document.querySelector('tagName')
// DOM객체.innerHTML
// <마크업>여기가 innerHTML</마크업>
// div, span, ol 등은 innerHTML 사용가능
// input, img 등은 innerHTML 사용 불가능

// // 1. 구성할 html 변수 선언
// let html = '';
// // 2. 데이터를 1부터 5까지 1씩 증가하면서 하나씩 출력
// for (let i = 1; i <= 5; i++) {
//     html += '★'; // ㅁ 한자키 8
//     // 3. 누적합계: 변수 += 값
// }
// // 4. 특정 HTML의 innerHTML 속성에 변수값을 대입하기
// document.querySelector('#star1').innerHTML = html;

// // 복습예제2) 특정 html(div#star1)에 총점 5점에서 고객평점을 출력하시오.
// // 출력형식 만약에 고객평점이 3점이면 ★★★☆☆
// let 고객평점 = 1;
// let html = '';
// for (let i = 1; i <= 5; i++) {
//     if (i <= 고객평점) {
//         html += '★';
//     } else {
//         html += '☆';
//     }
// }
// document.querySelector('#star1').innerHTML = html;

// 복습예제3) 특정 html(div#sheet)에 좌석배열 상태에 아래와 같이 출력하시오.
// 빈좌석 x, 사용중인 좌석 o
// 2개씩 3줄 출력
// ㅁ ㅁ
// ㅁ ㅁ
// ㅁ ㅁ 
// 빈좌석이면 배경색을 gray, 예약된 좌석이면 red 표시 
let sheetArray = ['o', 'x', 'o', 'x', 'o', 'x'];
let html = "<style>*{font-size:100px;}</style>";
let colorRed = '<span style="color: red">ㅁ</span>';
let colorGray = '<span style="color: gray">ㅁ</span>';
for (let i = 0; i < sheetArray.length; i++) {
    if (sheetArray[i] == 'o') {
        html += colorRed;
    } else {
        html += colorGray;
    }
    html += '&nbsp;&nbsp;&nbsp;';
    if (i % 2 == 1) {
        html += '<br/>';
    }
}
document.querySelector('#sheet').innerHTML = html;







