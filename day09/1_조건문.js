// 제어(조건문, 반복문)
// IF문: 조건문을 표현 가능한 문법
// - 조건에 true/false 또는 비교연산 또는 관계연산
// - if문 형태
//      1. if(조건) 참일경우코드;
//      2. if(조건) {참코드; 참코드;}
//      3. if(조건) {참일 경우 코드;}
//          else {거짓일 경우코드;}
//      4. if(조건1) {참1일 경우 코드}
//          else if (조건2) {참2일 경우 코드}
//          else if (조건3) {참3일 경우 코드}
//          else {조건들이 모두 거짓일 경우 코드}

// 1.
if (10 > 3) console.log("참"); // 조건을 충족하기 때문에 출력
if (10 > 20) console.log("거짓"); // 조건이 충족하지 않기 때문에 출력 안됨
if (10 > 20); console.log("거짓"); // if() 뒤에 ; 넣지 말자

// 2. 참일 경우 코드의 ; 2개 이상일때 {}로 묶어주자. 
if (10 > 20) console.log('4-1. 10>20'); console.log('4-2. 10>20');
if (10 > 3) { console.log('5-1. 10>3'); console.log('5-2. 10>3'); }
if (10 > 20) { console.log('6-1'); console.log('6-2'); }

// 3. 
if (10 > 3) { console.log("참입니다."); } else { console.log("거짓입니다."); }
// vs 삼항연산자. 삼항연산자에서는 선언문 사용 불가능 
10 > 3 ? console.log("참") : console.log("거짓");

// 4.
if (10 >= 20) { console.log("999"); }
else if (10 >= 15) { console.log("888"); }
else if (10 >= 10) { console.log("777"); }
else { console.log("666"); }
// 삼항 연산자
10 > 20 ? console.log("sdfdf")
    : 10 >= 15 ? console.log("234234")
        : 10 >= 10 ? console.log("sdfsf")
            : console.log("asasdfsad");

// 5. 중첩
let 성별 = '남';
let 점수 = 80;
if (성별 == '남') {
    if (점수 >= 90) {

    } else if (점수 >= 80) {

    } else if (점수 >= 70) {

    }
} else {
    if (점수 >= 90) {

    } else if (점수 >= 80) {

    } else if (점수 >= 70) {

    }
}