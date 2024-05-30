let 할일목록 = [];
let 목록번호 = 0;

function 할일추가() {
    let localStorageData = JSON.parse(localStorage.getItem('할일목록'));
    if (localStorageData == null) {
        할일목록 = [];
    } else {
        할일목록 = localStorageData;
    }

    const 입력된투두 = document.querySelector('#inputTodo').value;
    목록번호++;
    할일목록.push({ "할일": 입력된투두, "했는가": '안했다', "목록인덱스": 목록번호, "삭제": false });
    localStorage.setItem('할일목록', JSON.stringify(할일목록));
    투두리스트화면갱신();
    document.querySelector('#inputTodo').value = "";
}

function 투두리스트화면갱신() {
    let 할일리스트 = '';
    let localData = JSON.parse(localStorage.getItem('할일목록'));
    if (localData == null) {
        할일목록 = [];
    } else {
        할일목록 = localData;
    }

    for (let i = 0; i < 할일목록.length; i++) {
        if (할일목록[i].했는가 == '안했다' && 할일목록[i].삭제 == false) {
            할일리스트 += `
                <div>
                    <div>${할일목록[i].할일}</div>
                    <button onclick="했는가스위치(${할일목록[i].목록인덱스})">변경</button>
                    <button onclick="투두리스트에서삭제(${할일목록[i].목록인덱스})">삭제</button>
                </div>
            `;
        } else if (할일목록[i].했는가 == '했다' && 할일목록[i].삭제 == false) {
            할일리스트 += `
                <div>
                    <div><del>${할일목록[i].할일}</del></div>
                    <button onclick="했는가스위치(${할일목록[i].목록인덱스})">변경</button>
                    <button onclick="투두리스트에서삭제(${할일목록[i].목록인덱스})">삭제</button>
                </div>
            `;
        }
    }
    localStorage.setItem('할일목록', JSON.stringify(할일목록));
    document.querySelector('#mylist').innerHTML = 할일리스트;
}

function 했는가스위치(번호) {
    let localData = JSON.parse(localStorage.getItem('할일목록'));
    for (let i = 0; i < localData.length; i++) {
        if (localData[i].목록인덱스 == 번호) {
            if (localData[i].했는가 == '안했다') {
                localData[i].했는가 = '했다';
            } else {
                localData[i].했는가 = '안했다';
            }
            break;
        }
    }
    localStorage.setItem('할일목록', JSON.stringify(localData));
    투두리스트화면갱신();
}

function 투두리스트에서삭제(번호) {
    let localData = JSON.parse(localStorage.getItem('할일목록'));
    for (let i = 0; i < localData.length; i++) {
        if (localData[i].목록인덱스 == 번호) {
            localData[i].삭제 = true;
            break;
        }
    }
    localStorage.setItem('할일목록', JSON.stringify(localData));
    투두리스트화면갱신();
}
