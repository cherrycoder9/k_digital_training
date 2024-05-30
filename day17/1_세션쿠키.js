/*
    innerHTML 사용시 주의해야 할 점
    
    - 브라우저 세션과 쿠키 
    F12[개발자도구] -> application탭 -> 1. localStorage 2. sessionStorage

    - JS 실행시점: http(주소) 이용한 html 요청했을때 ---> html 열렸을때 (html에서 js를 포함하고 있기 때문)
    - F5 새로고침: 현재 HTTP(주소) 재요청 -> html -> js (메모리 초기화)
        - js에 있는 메모리 영구 저장 (외부 이용)
            1. DataBase(DB), 2. 브라우저(웹프로그램) 3. 자바(서버)

    브라우저 저장소 
    1. localStorage     객체 : 브라우저 꺼져도 데이터 유지, 유저가 직접 삭제해야, (실무: 자동로그인에서 사용)
    2. sessionStorage   객체 : 프로그램(브라우저) 꺼지면 데이터 사라짐 (활용: 검색엔진, 임시데이터)
        - 속성
            .setItem('key', value);     : 세션/쿠키에 key와 value 쌍으로 데이터 저장 
            .getItem('key')             : 세션/쿠키에 value 호출 
                - value에 문자 데이터 형식만 저장 가능. 객체X, 숫자X, 함수X
    
    객체 <---> 문자
        - JSON(자바스크립트 객체형식)
        1. JSON.stringfy({})    : 객체 -> 문자
        2. JSON.parse("")       : 문자 -> 객체
    
    - 데이터타입/형식과 값 다르다 
        "3": 값은 숫자이지만 데이터타입/형식은 문자 
        "{이름: '유재석'}" 값은 객체이지만 데이터타입/형식은 문자 
*/

// 1
// localStorage.setItem('이름', '유재석');
console.log(localStorage.getItem('이름'));

// sessionStorage.setItem('나이', '40');
console.log(sessionStorage.getItem('나이'));

// 2. 
localStorage.setItem('객체', { 이름: '유재석', 나이: '40' });
console.log(localStorage.getItem('객체'));

// 3.
console.log({ '이름': '유재석' });
console.log(JSON.stringify({ '이름': '유재석' }));

console.log("{ '이름': '유재석' }");
console.log(JSON.parse('{ "이름": "유재석" }'));

// 4. 
localStorage.setItem('저장소', JSON.stringify({ 국어: 30, 영어: 50 }));
console.log(JSON.parse(localStorage.getItem('저장소')));