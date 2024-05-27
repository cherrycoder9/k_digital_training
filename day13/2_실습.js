carTime = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //입차시간
isParked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //입차여부
//console.log(isParked);
carNum = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']; //주차된 차 번호
//console.log(carNum);
car = [];
for (i = 0; i < 20; i++) { // car 배열 20칸
    car.push({ carTime: 0, isParked: 0, carNum: '' });
}
menuPrint();
currentTime = ''; //현재시간


function carIn(x) { //입차
    let c = document.querySelector('#inputCar').value;
    let currentTime = new Date();
    currentTime = (currentTime.getHours() * 60) + currentTime.getMinutes();
    let isDuplicate = false;
    for (let i = 0; i < car.length; i++) { //차량 이미 있는지 비교
        if (car[i].carNum == c) {
            message('입차불가, 차가 이미 존재합니다'); isDuplicate == true; break; //차량이 이미 있음
        } else { isDuplicate == false; } // 차량이 없는 자리
    }
    if (c == '') { message('차량 번호가 잘못되었습니다.'); } // 차량번호 빈칸 X
    else if (isDuplicate == false) { // && 중복 차량번호 X
        car[x].carNum = c; car[x].isParked = 1; car[x].carTime = Number(currentTime); message('입차성공');
    }
    menuPrint();
}

function carOut() { //출차
    let c = document.querySelector('#inputCar').value;
    let x = -1;

    for (let i = 0; i < 20; i++) {          // 입력한 차량의 위치 확인
        if (car[i].carNum == c) {
            x = i;
            break;
        }
    }

    let currentTime = new Date();
    let outTime = (currentTime.getHours() * 60) + currentTime.getMinutes(); // 분으로 환산된 현재시간
    ////console.log('outtime=', outTime, 'currentTime=', currentTime, 'cartime=', carTime[x]);

    let cost = Number((outTime - car[x].carTime) * 100);
    ////console.log('cost1= ', cost);
    if (cost == 0) { cost += 100; }
    ////console.log('cost2 =', cost);
    if (x != -1) {
        message(`출차 완료되었습니다. 요금은 ₩${cost.toLocaleString('ko-KR')}원입니다`); car[x].carNum = ''; car[x].isParked = 0; car[x].carTime = 0;
    } else { message('차량번호가 잘못되었습니다'); }
    menuPrint(); ////console.log("carout =", carNum, isParked, carTime);
}

function menuPrint() { //주차칸 표시
    let html = '';
    for (let i = 0; i < car.length; i++) {
        if (car[i].isParked == 1) { //color2 주차되어있음
            html += `<div id="parkSlot${i}" class="parked" onclick="carIn(${i})" >${i + 1}</div>`;
        } else { //color1 주차 안 되어있음
            html += `<div id="parkSlot${i}" class="notparked" onclick="carIn(${i})" >${i + 1}</div>`;
        }
    }
    //console.log('printed');
    document.querySelector('#parkWrap').innerHTML = html;
}

function message(x) { // 메시지칸 표시
    let message = document.querySelector('#message');
    html = `${x}`;
    message.innerHTML = html;
}