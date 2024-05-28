/*
    DOM : 문서 객체 모델 \
    
    document: HTML 전체 요소
    
    - 요소 가져오기 함수 
    document.querySelector('선택자') : 선택자 1개를 객체로 반환
    document.querySelectorAll('선택자') : 선택자 전부를 객체 배열로 반환 

    - 선택자: CSS 동일
    1. 마크업 2. .클래스명 3. #ID명 4. 자식: > , 자손띄어쓰기 

    - 요소 조작 속성/함수
        innerHTML 속성
            - 사용가능 요소: <div>, <table>, <ol> 등등 열고 닫는 마크업이 있는
            - 사용불가능 요소: <input/>, <img/>, <br/> 등등
            <호출> document.querySelector('선택자').innerHTML
            <수정> document.querySelector('선택자').innerHTML = HTML형식의문자열데이터 

        .value 속성
            - 사용가능 요소: <input />, <select>, <textarea> 등등
            - 사용불가능 요소: <div>, <table> 등등 
            <호출> document.querySelector('선택자').value
            <수정> document.querySelector('선택자').value = HTML형식의문자열데이터

        .src 속성
            - 사용가능 요소: <img/> <video></video> <audio></audio>
            <호출> document.querySelector('선택자').src
            <수정> document.querySelector('선택자').src = '파일경로'

        .style 속성
            <전체호출> document.querySelector('선택자).style
            <전체수정> document.querySelector('선택자).style = 'css속성코드';
            <일부호출> document.querySelector('선택자).style.css속성명
            <일부수정> document.querySelector('선택자).style.css속성명 = '속성값'

            - css 속성명 작성시 카멜표기법 예시
                1. background-color -> backgroundColor
                2. margin-left -> marginLeft


*/

// 1. DOM 객체 확인
console.log(document);
console.log(document.body);
console.log(document.querySelector('body'));

// 2. document.querySelector('선택자')
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelector('.box2'));
console.log(document.querySelector('#box3'));
// 자식, 자손 선택자 가져오기도 가능 
console.log(document.querySelector('body>div'));

// 3. 선택된 요소(마크업)를 저장 
let box3 = document.querySelector('#box3');
console.log(box3);

// 4. innerHTML: 문서의 요소 필요
console.log(document.querySelector('.box2').innerHTML);
console.log(document.querySelector('.box2').innerHTML = 'box22');

// 5. value
console.log(document.querySelector('input').value);
document.querySelector('input').value = '강호동';

let select = document.querySelector('select');
console.log(select.value);
select.value = '수박';

console.log(document.querySelector('textarea').value);
document.querySelector('textarea').value = 'ㅇㄴ라ㅣㅓㅗㄴ임ㄹ;ㅁㄴ;이ㅓ니ㅏ;ㅁㅇ런밍;ㄹ';
console.log(document.querySelector('textarea').value);

// 6. src
document.querySelector('img').src = '../review/dog-profile-img.jpg';

// 7. style
// 전체 스타일
document.querySelector('#box4').style = `color:white;background-color:blue;`;
// 일부분 스타일 적용시 하이픈(-)을 사용하면 안된다.
// 카멜 표기법 : 낙타 등 모양처럼
// carspeed -> carSpeed, backgrond-color -> bakcgroundColor
console.log(document.querySelector('#box4').style.backgroundColor);
document.querySelector('#box4').style.backgroundColor = 'red';