/*
    JS 제어문(반복문)
    for
        - 조건 충족일 때 특정 범위내 코드를 반복 실행
        - for 형태
            for(초기값;조건문;증감식){실행코드;}
            1. 초기값: 반복을 할떄 반복의 카운터/횟수 체크하는 변수의 처음값
            2. 조건문: 반복실행문이 실행되는 조건이므로 true이면 {} 실행 아니면 for 종료
            3. 증감식: 반복변수의 증가 혹은감소 변화 연산식/패턴
                반복변수 = 반복변수+1 vs 반복변수 +=1 vs 반복변수++
            4. 실행코드: 조건문이true일때 실행할 코드
        - 흐름순서
            1. 초기값 -> 2. 조건문 -> 3. 실행코드 -> 4. 증감식 -> 5.조건문 -> 6. 실행코드 -> ...
        - 어디서부터 어디까지 몇씩 증가할건지

        - 배열과 반복문
            배열의 인덱스는 순차적인 순서가 존재한다.
            1. 배열 순회
                - 반복 변수를 index 처럼 사용
            2. 향상된 for문
                - for(let 반복변수 in 배열변수) {}
                    배열변수 내 인덱스를 순차적으로 하나씩 반복변수에 대입 반복
                - for(let 반복변수 of 배열변수) {}
                    배열변수 내 데이터를 순차적으로 하나씩 반복변수에 대입 반복
            3. 스트림 함수: forEach(), map(), filter()

        - for 중첩
            for() {
                for() { }
            }

        - 무한루프 / 종료없는 반복
            for( ; ; ) { }
            while(true) { }

        - 반복문 키워드
            1. break;       // 가장 가까운 반복문 탈출/종료/끝내기
            2. continue;    // 가장 가까운 for문의 증감식으로 이동

*/

// 1.
// for (let 반복변수 = 1; 반복변수 <= 10; 반복변수++) {
//     console.log("콜라 구매");
// }

// 2. 1~10까지 출력
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 3. 1~10까지 숫자의 누적합계
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
//     console.log(sum);
// }

// 4. 1~100까지의 7배수 숫자만 누적으로 합하기
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 == 0) {
//         sum += i;
//         console.log(sum);
//     }
// }

// 5. 반복문을 이용한 구구단 중에 2단 출력
// let dan = 2;
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} x ${i} = ${dan * i}`);
// }

// 6. 배열의 데이터개수: 3개, 인덱스: 0~2
// let 과일상자 = ['사과', '포도', '딸기'];
// // 인덱스는 0부터 2까지 1씩 증가
// for (let index = 0; index < 3; index++) {
//     console.log(과일상자[index]);
// }
// // 인덱스는 0부터 배열명.length
// for (let index = 0; index < 과일상자.length; index++) {
//     console.log(과일상자[index]);
// }

// 7.
// let 과일상자 = ['사과', '포도', '딸기'];
// for (let index in 과일상자) {
//     console.log(index);
// }

// for (let index of 과일상자) {
//     console.log(index);
// }

// 8.
// let studentList = ['유재석', '강호동', '신동엽'];
// let html = "";
// for (let i = 0; i < studentList.length; i++) {
//     html += `<li>${studentList[i]}</li>`;
// }
// document.querySelector('#student').innerHTML = html;

// 9. for 중첩
// for (let 부모 = 1; 부모 <= 5; 부모++) {
//     console.log(`${부모}`);
//     for (let 자식 = 1; 자식 <= 3; 자식++) {
//         console.log(`>>>>> ${자식}`);
//     } //for2 end
// } // for1 end

// 10. for 중첩 이용한 구구단
// for (let dan = 2; dan <= 9; dan++) {
//     for (let i = 1; i <= 9; i++) {
//         console.log(`${dan} x ${i} = ${dan * i}`);
//     }
//     console.log("==========");
// }

// 11.
// for (; ;) { console.log("무한반복"); } // 메모리 과부하 오류발생
// for (; ;) {
//     // prompt, alert, comfirm 등 몇몇 함수들은 입력/출력시 모든 코드실행 중지됨
//     let input = prompt('무한입력중임');
//     console.log(input);
//     if (input == 'X' || input == 'x') {
//         break;
//     }
// }

// 12. break; 이용한 1부터 30까지 1씩 증가하면서 20이면 반복문 종료
// for (let i = 1; i <= 30; i++) {
//     if (i == 20) {
//         break;
//     }
//     console.log(i);
// }

// 13. continue; 이용한 1부터 10까지 1씩 증가하면서 출력. 만일 5이면 건너뛰기
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// 14. 입력받은 데이터를 numArray에 push(추가)하기
// 조건1: 중복입력 가능하지만 중복 저장하지 말기 
// 조건2: 배열에 중복없이 6개의 숫자가 등록되면 반복문 종료 
let numArray = [];
let cnt = 0;
while (cnt < 6) {
    let num = +prompt(`${cnt + 1}번째 수를 입력하세요.`);
    if (numArray.indexOf(num) >= 0) {
        alert("중복입니다. 다른수를 입력하세요");
    } else {
        numArray[cnt] = num;
        cnt++;
    }
}
console.log(numArray);

// for (let i = 1; i <= 6; i++) {
//     let num = prompt(`${i}번째의 수 입력`);
//     if (numArray.indexOf(num) >= 0) {
//         i--;
//         continue;
//     }
//     numArray.push(num);
// }
// console.log(numArray);