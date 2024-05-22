/*
    매개변수와 반환값                                       호출
        1. function func1() { }                           func1()
        2. function func2(매개변수1, 매개변수2) { }         func2(데이터, 데이터)
        3. function func3(매개변수1, 매개변수2) {return}    let 반환값 = func3(D, D)
        4. function func4() {return}                       let 반환값 = func4()

    - 예) 핸드폰수리 함수
        function 핸드폰수리(고장난핸드폰, 수리비) {
            핸드폰수리 레시피에 따라 행위;
            return 수리된핸드폰;
        }

    - 예) 클릭(이벤트) vs 매개변수 
        function 신호등소리() {
            소리발생 코드;
        }

    - 함수 호출하는 방법
        1. JS에서 JS함수를 호출하는 방법
            - 선언된 함수가 같은 js파일에서 존재하면: 함수명()
        2. HTML에서 JS함수를 호출하는 방법
            <마크업 이벤트속성="함수명"></마크업>
*/

//  함수 정의/만들기
// 1. 선언적 함수
// 매개변수x 반환값x
function func1() {
    console.log('func1 실행');
}
// 매개변수o 반환값x
function func2(x, y) {
    console.log('func2 실행 ' + (x + y));
}
// 매개변수o 반환값o
function func3(x, y) {
    console.log('func3 실행 ' + (x + y));
    return x + y;
}
// 매개변수x 반환값 o
function func4() {
    console.log('func4 실행');
    return 10;
}

// 함수 호출
// 0. 라이브러리: 미리 만들어둔 함수 호출
// console.log('lib 실행');   // 매개변수o: F12개발자도구 출력메시지, 반환값x
// prompt('메시지');          // 매개변수o: 알림창출력메시지, 반환값o:입력받은메시지
// document.querySelector(); // 매개변수o: 선택자, 반환값o:DOM객체(html마크업을 js코드객체로)
// Math.random()             // 매개변수x, 반환o: 0~1미만 난수값 

// 1. 함수명 (): 매개변수가 없는 함수 호출
func1();
// 함수명(데이터, 데이터)
func2(10, 3);
func2(3, 4);
// 함수명(데이터, 데이터): 매개변수에 대입할 데이터 대입,
func3(10, 3); // 10과 3일 대입해서 함수 실행후 13반환하지만 변수에 대입 안했기 때문에 사라짐
let result3 = func3(10, 3);
console.log(func3(10, 3));
// 함수명()
let result4 = func4();
console.log(result4);