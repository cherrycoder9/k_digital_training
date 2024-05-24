carTime = [, , , , , , , , , , , , , , , , , , ,]; //입차시간
isParked = []; //입차여부
for (i = 0; i < 20; i++) { //isParked = false X 20
    isParked.push(false);
}
console.log(isParked);
carNum = [, , , , , , , , , , , , , , , , , , ,]; //주차된 차 번호
currentTime = ''; //현재시간


function parkSlot(x) { //입차
    let car = document.querySelector('#inputCar').value;
    if (carNum.includes(car) == false) {
        carNum[x] = car; isParked[x] = true; message('입차성공');
    } else { message('입차불가, 차가 이미 존재합니다'); }
    menuPrint();
}

function carOut(x) { //출차
    let car = document.querySelector('#inputCar').value;
    if (carNum.includes(car) == true) {

    } else { message('차량번호가 잘못되었습니다'); }
    menuPrint();
}

function menuPrint() { //주차칸 표시
    let parked = '';
    let unparked = '';
    let html = '';
    for (let i = 0; i < 20; i++) {
        if (isParked == true) { //color2 주차되어있음
            html += `<div id=parkSlot${i} class="parked">${i + 1}</div>`;
        } else { //color1 주차 안 되어있음
            html += `<div id=parkSlot${i} class="notparked">${i + 1}</div>`;
        }
    }

    document.querySelector('#parkWrap').innerHTML = html;
}

function message() { // 메시지칸 표시

}