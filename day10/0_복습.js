// 복습예제1: 주차장 차량 검색대
// 조건1: let carArray = ['250어7142', '132가6315'] (차량번호)
// 조건2: let locationArray = ['A1', 'B3']          (주차위치)
// 조건3: carArray, locationArray 인덱스가 같은 정보의 차량
// 조건4: 차량번호 입력받아 내 차량 위치 찾기

// let carArray = ['250어7142', '142가7415'];
// let locationArray = ['A1', 'A2'];

// // 1. 차량번호 입력받아 변수에 저장
// let carNum = prompt('차량번호');

// // 2. 입력받은 차량번호의 내열내 인덱스 찾기
// let carIndex = carArray.indexOf(carNum);

// // 3. 논리조건
// if (carIndex == -1) {
//     console.log("없는 차량 번호입니다.");
// } else {
//     console.log(`${locationArray[carIndex]} 위치에 있습니다.`);
// }

// 복습예제2) 틱택토(3목) 게임
// 9칸 배열생성
// 판넬 상태: B(비어 있는) O(플레이어1) X(플레이어2)
// 승리 체크 (연속된 판넬이 3개의 모양이 같은 경우, B제외)
// 가로로 이기는 수     : [0] == [1] == [2], [3] == [4] == [5], [6] == [7] == [8],
// 세로로 이기는 수     : [0] == [3] == [6], [1] == [4] == [7], [2] == [5] == [8],
// 대각선으로 이기는 수 : [0] == [4] == [8], [2] == [4] == [6]
let gamePanel = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'];

// 9칸 배열의 데이터를 출력하는 HTML 구성
let html = `
    ${gamePanel[0]} ${gamePanel[1]} ${gamePanel[2]} <br/>
    ${gamePanel[3]} ${gamePanel[4]} ${gamePanel[5]} <br/>
    ${gamePanel[6]} ${gamePanel[7]} ${gamePanel[8]}
`;

document.querySelector('#gamePanel').innerHTML = html;

// --- 1. p1 입력받고 2. 승리 체크 3. p2 입력받고 4. 승리체크 
if (gamePanel[0] == gamePanel[1] && gamePanel[1] == gamePanel[2]) { }
if (gamePanel[3] == gamePanel[4] && gamePanel[4] == gamePanel[5]) { }
if (gamePanel[6] == gamePanel[7] && gamePanel[7] == gamePanel[8]) { }

if (gamePanel[0] == gamePanel[3] && gamePanel[3] == gamePanl[6]) { }
if (gamePanel[1] == gamePanel[4] && gamePanel[4] == gamePanel[7]) { }
if (gamePanel[2] == gamePanel[5] && gamePanel[5] == gamePanel[8]) { }

if (gamePanel[0] == gamePanel[4] && gamePanel[4] == gamePanel[8]) { }
if (gamePanel[2] == gamePanel[4] && gamePanel[4] == gamePanel[6]) { }

if (gamePanel.indexOf('B') == -1) { }