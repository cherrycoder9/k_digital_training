// 복습예제1 : 1차점수, 2차점수 입력받아 총점이 150점 이상이면 '성공' 아니면 '실패'
// HTML의 <h3></h3>에 출력하시오


// // 1. 입력받은 데이터를 변수에 저장
// let point1 = Number(prompt('1차점수'));
// let point2 = Number(prompt('2차점수'));
// // 2. 연산
// let total = point1 + point2;
// console.log(total);
// // 3. 논리조건
// let msg = total >= 150 ? '성공' : '실패';
// console.log(msg);
// // 4. 문자열 템플릿
// let html = `결과: ${msg}`;
// console.log(html);
// // 5. HTML에 출력
// let divVar = document.querySelector('#result1');
// console.log(divVar);
// // document: 문서, HTML 뜻
// // query(질의) Selector(선택자)
// // CSS 선택자 동일: 1. 마크업 2. .class 3. #id
// // innerHTML: <마크업> </마크업>

// 복습예제2
// 두 사람의 이름을 입력받아서 이름이 '유재석'이면 (방장)이라고 이름 뒤에 연결해주고
// HTML의 <ol>의 두 사람의 이름을 <li>로 출력하시오.

// 1. 입력받아 변수에 저장하기 
let name1 = prompt("이름1 입력");
console.log(name1);
let name2 = prompt("이름2 입력");
console.log(name2);
// 2. 논리 조건에 따른 문자열연결과 변수 수정 
name1 = (name1 == '유재석') ? name1 += '(방장)' : name1;
console.log(name1);
name2 = (name2 == '유재석') ? name2 += '(방장)' : name2;
console.log(name2);

let html2 = `
        <li>${name1}</li>
        <li>${name2}</li>
`;
console.log(html2);

// 4. HTML에 출력하기
document.querySelector('#result2').innerHTML = html2;