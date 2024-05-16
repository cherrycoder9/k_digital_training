/*
    - 변수/상수: 데이터 1개 저장할 수 있는 공간/메모리/상자
    - JS 데이터 종류
        1. 문자: " ", ' ', ` `
        2. 숫자: 7, -10, 10.4
        3. 불리언: true, false
        4. 배열: [데이터1, 데이터2, 데이터3]

    - 배열
        - 순서대로 번호가 붙은 데이터들이 연속적인 형태로 구성된 구조
        - 인덱스/순서대로 번호: 중복된 데이터를 식별하기 위해서 
        - 예)
            사과박스 = [ 사과, 사과, 사과, 사과 ]
                          0     1    2     3
            - 인덱스: 0번부터 시작 
        1. 배열: [] 대괄호 이용한 여러개 데이터를 묶은 데이터 
            [데이터, 데이터, 데이터, 데이터]
        2. 인덱스번호: 0번부터 시작, 개수/길이-1 까지 
        3. 배열 선언과 변수의 대입
            let 변수명 = [D1, D2, D3]
        4. 배열 호출
            1. 전체 호출: 변수명
            2. 특정 데이터 호출: 변수명[인덱스번호]
        5. 배열 수정
            1. 전체 수정: 변수명 = [새로운 배열]
            2. 부분 수정: 변수명[인덱스번호] = 데이터값
        6. 배열 끝에 데이터 추가 
            변수명.push(데이터)
        7. 배열 내 특정 데이터 삭제
            1. 변수명.splice(인덱스,1): 인덱스위치를 1개 삭제한다 (한칸씩 당겨짐) 
            2. 변수명.splice(인덱스,0,새로운데이터):인덱스위치에 새로운데이터 삽입 (한칸씩 밀려남)
        8. 배열내 데이터의 인덱스 찾기 
            변수명.indexOf(찾을데이터) : 만약에 찾을 데이터가 배열 내 존재하면 위치/인덱스 반환, 없으면 -1
*/

// 1. 배열 만들기 = 데이터 여러개 저장하기
['사과', '사과', '사과'];

// 2. 선언된 배열 출력
console.log(['사과', '사과', '사과']);

// 3. 배열을 변수/상수에 저장
let 과일상자 = ['사과', '바나나', '포도'];

// 4. 배열을 가지고 있는 변수내 배열 호출
console.log(과일상자);

// 4-2. 배열이 가지고 있는 특정 위치의 데이터 호출
console.log(과일상자[0]); // 변수명[인덱스] ===> '사과'
console.log(과일상자[1]); // 변수명[인덱스] ===> '바나나'
console.log(과일상자[2]); // 변수명[인덱스] ===> '포도'
console.log(과일상자[3]); // 변수명[인덱스] ===> undefined

// 5. 배열 수정 
과일상자 = ['사과', '바나나'];
console.log(과일상자);

// 5-2 배열 내 특정 데이터만 수정
과일상자[2] = '포도';
console.log(과일상자);

// 6. 배열에 요소/데이터 추가 
// 변수명.push(데이터);
과일상자.push('체리'); // 맨 끝에 들어감
console.log(과일상자);

// 7. 배열의 요소/데이터 삭제(접합)
// 변수명.splice(삭제할인덱스, 삭제할개수)
과일상자.splice(0, 1); // 사과 1개 삭제됨 
console.log(과일상자); // 바나나, 포도, 체리
과일상자.splice(1, 0, '수박');
console.log(과일상자); // 바나나, 수박, 포도, 체리

// 8. 데이터의 인덱스 찾기
// 변수명.indexOf(찾을데이터): 있으면 인덱스 호출(0 ~) 없으면 -1
console.log(과일상자.indexOf('포도'));
// 활용
let 삭제할인덱스 = 과일상자.indexOf('포도'); // 2 => 반환된 2를 '삭제할인덱스' 변수에 저장 
과일상자.splice(삭제할인덱스, 1); // splice(2, 1) 바나나 수박 체리 
console.log(과일상자);