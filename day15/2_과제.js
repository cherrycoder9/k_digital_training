// 롯데시네마
// 1. 지역
// 2. 지점
// 3. 상영중인 영화
// 4. 날짜
// 5. 관마다 시간
// 변수, 배열, 객체를 이용한 설계하기
// ------------------
// 인천 부평역사점 범죄도시4 2024-05-25 2관 13:30
// 서울 가양점 드림시나리오 2024-05-27 4관 18:10


/*
    게시판 (네이버 증권 게시판)
        1. 카테고리 / 종목명
        2. 게시물 / 제목, 내용, 작성일, 조회수
        3. 댓글 / 내용, 작성일
*/

let 카테고리목록 = [
    { cno: 1, cname: '삼성전자' },
    { cno: 2, cname: 'LG전자' },
];

let 게시물목록 = [
    { bno: 1, btitle: '올랐다', bcontent: '좋아요', bpassword: '1234', bdate: '2024-05-28', cno: 1 },
    { bno: 2, btitle: '내렸다', bcontent: '싫어요', bpassword: '4567', bdate: '2024-05-27', cno: 1 }
];

let 댓글목록 = [
    { rno: 1, rcontent: '좋겠네', rdate: '2024-05-28', bno: 1 },
    { rno: 2, rcontent: '싫겠네', rdate: '2024-05-28', bno: 2 },
    { rno: 3, rcontent: '하하하', rdate: '2024-05-29', bno: 2 }
];

// 1. 1번 게시물의 댓글 출력해보자
let clickBno = 1;
for (let i = 0; i < 댓글목록.length; i++) { // 댓글목록 모두 순회
    if (댓글목록[i].bno == 1) {
        console.log(댓글목록[i]);
    }
}

// 2. 삼성전자의 게시물과 댓글 출력해보자 
let clickCno = 1;
for (let i = 0; i < 게시물목록.length; i++) { // 게시물목록 모두 순회
    // 조건: clickCno와 같은 경우만 출력
    if (게시물목록[i].cno == clickCno) {
        console.log(게시물목록[i]);
        console.log('--------------------------');

        for (let j = 0; j < 댓글목록.length; j++) {
            // 조건2: 위에 있는 i번째 게시물 번호와 댓글에 있는 게시물 번호와 같으면
            if (게시물목록[i].bno == 댓글목록[j].bno) {
                console.log(댓글목록[j]);
            }

        } // for2 end
        console.log('--------------------------');
    } // if end
} // for1 end