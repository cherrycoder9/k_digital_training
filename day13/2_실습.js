carTime = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //입차시간
isParked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //입차여부
console.log(isParked);
carNum = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']; //주차된 차 번호
console.log(carNum);
menuPrint();
currentTime = ''; //현재시간


function carIn(x) { //입차
    let car = document.querySelector('#inputCar').value; console.log('car' + car);
    let currentTime = new Date(); console.log('currentTime1=' + currentTime);

    currentTime = (currentTime.getHours() * 60) + currentTime.getMinutes(); console.log('currentTime2=' + currentTime);
    console.log('carNum=' + carNum);
    if (car == '') { message('차량 번호가 잘못되었습니다.'); }
    else if (carNum.includes(car) == false && carNum[x] == '') {
        carNum[x] = car; isParked[x] = 1; carTime[x] = Number(currentTime); message('입차성공'); console.log('success');
    } else { message('입차불가, 차가 이미 존재합니다'); console.log('fail'); }
    console.log('carinx=', carNum, isParked, carTime);
    menuPrint();
}

function carOut() { //출차
    let car = document.querySelector('#inputCar').value;
    let x = carNum.indexOf(car);
    let currentTime = new Date();
    let outTime = (currentTime.getHours() * 60) + currentTime.getMinutes(); // 분으로 환산된 현재시간
    console.log('outtime=', outTime, 'currentTime=', currentTime, 'cartime=', carTime[x]);

    let cost = Number((outTime - carTime[x]) * 100);
    console.log('cost1= ', cost);
    if (cost == 0) { cost += 100; }
    console.log('cost2 =', cost);
    if (carNum.includes(car) == true) {
        message(`출차 완료되었습니다. 요금은 ₩${cost.toLocaleString('ko-KR')}원입니다`); carNum[x] = ''; isParked[x] = 0; carTime[x] = 0;
    } else { message('차량번호가 잘못되었습니다'); }
    menuPrint(); console.log("carout =", carNum, isParked, carTime);
}

function menuPrint() { //주차칸 표시
    let html = '';
    for (let i = 0; i < 20; i++) {
        if (isParked[i] == 1) { //color2 주차되어있음
            html += `<div id="parkSlot${i}" class="parked" onclick="carIn(${i})" >${i + 1}</div>`;
        } else { //color1 주차 안 되어있음
            html += `<div id="parkSlot${i}" class="notparked" onclick="carIn(${i})" >${i + 1}</div>`;
        }
    }
    console.log('printed');
    document.querySelector('#parkWrap').innerHTML = html;
}

function message(x) { // 메시지칸 표시
    let message = document.querySelector('#message');

    html = `${x}`;

    message.innerHTML = html;
}