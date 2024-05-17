/*
    0. 키워드: 미리 만든 의미/기능이 담긴 단어 
    1. 세미콜론;
        - 컴퓨터에게 문장 마침 알림 
        - 한줄에 코드문장이 1개일때 생략 가능 
        - 한줄에 코드문장이 2개 이상일때는 코드문장마다 ; 마침

    2. 데이터 타입
        typeof data     : data 타입/형식 을 출력
        - HTML언어는 문자열 타입  

    3. 문자열 처리 
        1. " ", ' ', ` `
            - 백틱 문자열 템플릿 
            `문자열${JS코드} 문자열${JS 코드}`

        2. 변수호출이나 연산은 문자처리 안됨

    4. 

*/

// 1. 
console.log('사과');
console.log('바나나');
console.log('포도');

// 2.
console.log(typeof '사과'); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof [1, 2]); // object : 객체(array 포함)

// 3. 
console.log('코드마스터'); // 문자 
console.log("2400"); // 문자 
// console.log('ㄴㅇㄹㄴㅇㅁㄹ"); // 불가능 ;
console.log('ㄴㅇㄹㄴㅇㄹ"ghasdf"'); // 가능 
console.log("ㄴㅇㄹㄴㅇㄹ'ㅁㅁㅁㅁ'"); // 가능
console.log(`"ㄴㅇㄹㄴㅇㄹ'ㅁㅁㅁㅁ'"`); // 가능

// 4. 
let 나이 = 40;
console.log('유재석' + "강호동"); // 문자열+문자열 : 연결연산자 
console.log(`${'유재석'}${'강호동'}`); // 템플릿엔진
console.log(`${'유재석'}${30}`); // 템플릿엔진
console.log('유재석' + 나이);
console.log(`유재석${나이}`);

// 4-2
let 직원1 = '유재석';
let 직원2 = '강호동';
let ageHTML1 = "<ol><li>" + 직원1 + "</li> <li>" + 직원2 + "</li></ol>";
document.write(ageHTML1);
let ageHTML2 = `<ol><li>${직원1}</li> <li>${직원2}</li></ol>`;
document.write(ageHTML2);

// 5. 
let 차량번호 = '250어7142';
console.log(차량번호[1]);
console.log(차량번호.length);
let 잘라낸차량번호 = 차량번호.split('어'); // '어' 문자 기준으로 분리해서 배열 반환 
console.log(잘라낸차량번호);

// 예1 > 2명의 사원정보를 이름과 나이 입력받아 HTML 테이블 형식 출력
let 사원이름 = [];

사원이름[0] = prompt("사원1 이름", "");
사원이름[1] = prompt("사원1 이름", "");
let tableHTML = `
    <table>
        <tr>
            <th>번호</th>
            <th>이름</th>
        </tr>
        <tr>
            <td>1</td>
            <td>${사원이름[0]}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>${사원이름[1]}</td>
        </tr>
    </table>
`;
console.log(tableHTML);
document.write(tableHTML);