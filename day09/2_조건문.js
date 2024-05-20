// 입력은 프롬프트
// 출력은 콘솔로그

// 1) 3개 점수 입력, 총점 90점 이상 '성공' 아니면 '실패'
// let score1 = [];
// score1[0] = +prompt("점수1 입력");
// score1[1] = +prompt("점수2 입력");
// score1[2] = +prompt("점수3 입력");
// let total1 = score1[0] + score1[1] + score1[2];
// console.log(total1 >= 90 ? "성공" : "실패");

// 2) 2개 정수 입력, 더 큰 수 출력
// let score2 = [];
// score2[0] = +prompt("정수1 입력");
// score2[1] = +prompt("정수2 입력");
// console.log(score2[0] > score2[1] ? score2[0] : score2[1]);

// 3) 3개 정수 입력, 가장 큰 수 출력
// let score = [];
// score[0] = +prompt("정수1 입력");
// score[1] = +prompt("정수2 입력");
// score[2] = +prompt("정수3 입력");
// let largestNum = score[0];
// // if문을 각각 사용해 모든 경우 검사
// if (largestNum < score[1]) { largestNum = score[1]; }
// if (largestNum < score[2]) { largestNum = score[2]; }
// console.log(largestNum);

// 4) 3개 정수 입력, 오름차순/내림차순 출력
// let score4 = [];
// score4[0] = +prompt("정수1 입력");
// score4[1] = +prompt("정수2 입력");
// score4[2] = +prompt("정수3 입력");
// let temp4;
// if (score4[0] > score4[1]) {
//     temp4 = score4[0];
//     score4[0] = score4[1];
//     score4[1] = temp4;
// }
// if (score4[0] > score4[2]) {
//     temp4 = score4[0];
//     score4[0] = score4[2];
//     score4[2] = temp4;
// }
// if (score4[1] > score4[2]) {
//     temp4 = score4[1];
//     score4[1] = score4[2];
//     score4[2] = temp4;
// }
// console.log(score4);



// 5) 1개 점수 입력, 90점 이상 'A등급', 80점 이상 'B등급', 70점 이상 'C등급' 그외 '재시험' 출력
// let score5 = prompt("점수 입력");
// if (score5 >= 90) {
//     console.log("A등급");
// } else if (score5 >= 80) {
//     console.log("B등급");
// } else if (score5 >= 70) {
//     console.log("C등급");
// } else {
//     console.log("재시험");
// }


// 6) 아이디, 비밀번호 입력, 아이디가 'admin' 비밀번호가 '1234'이면 로그인 성공 아니면 로그인 실패 출력
// let id = prompt("아이디 입력");
// let pass = prompt("패스워드 입력");
// let isSuccess = (id == 'admin' && pass == 1234) ? '로그인성공' : '로그인실패';
// console.log(isSuccess);

// 7) 과일 배열 선언 let fruitList = ['바나나', '사과']
//    하나의 과일명을 입력받아 fruitList에 존재하면 '이미 존재하는 과일' 아니라면
//    배열에 입력받은 과일 이름을 저장하고 현재 배열을 출력하시오.
// let fruitList = ['바나나', '사과'];
// let fruitName = prompt("과일명 입력");
// let hasFruit = fruitList.indexOf(fruitName);
// if (hasFruit >= 0) {
//     console.log("이미 존재하는 과일");
// } else {
//     fruitList.push(fruitName);
//     console.log(fruitList);
// }

// 8) 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue', 여자이면 'red'
//    대입하고 색상변수 출력
// let idNumber = prompt("주민번호 입력");
// let color = 'black';
// if (idNumber[6] == '1' || idNumber[6] == '3') {
//     color = 'blue';
// } else {
//     color = 'red';
// }
// let html = `<h3 style="color:${color}">주민등록번호: ${idNumber}</h3>`;
// document.querySelector('#result1').innerHTML = html;

// 9) 가위바위보 게임, 플레이어 2명
//    조건1: 가위:0, 바위:1, 보:2
//    실행조건: 각 플레이어가 한번씩 입력받기
//    출력조건: 플레이어X 이겼을때 '플레이어X 승리' 출력, 비기면 '무승부' 출력
// let p1 = Number(prompt("가위:0, 바위:1, 보:2"));
// let p2 = Number(prompt("가위:0, 바위:1, 보:2"));
// let result = p1 - p2;
// if (result == -1 || result == 2) {
//     console.log("플레이어2 승리");
// } else if (result == 0) {
//     console.log("무승부");
// } else {
//     console.log("플레이어1 승리");
// }

// 10) 좌석 3개의 상태를 가지는 배열 선언, let sheetList = ['O', 'X', 'O']
//    하나의 좌석 순서번호를 입력받아 빈좌석이면 '예약성공' 아니면 '예약불가' 출력하고
//    빈좌석: 'X', 사용중인좌석: 'O'
let sheetList = ['O', 'X', 'O'];
let sheetNum = +prompt("좌석 번호 입력");
if (sheetList[sheetNum - 1] == 'X') {
    console.log("예약성공");
    sheetList[sheetNum - 1] = 'O';
} else {
    console.log("예약실패");
}
console.log(sheetList);
