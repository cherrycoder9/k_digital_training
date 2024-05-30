할일목록 = [];
목록번호 = 0;

function 할일추가() {
    // 먼저 기존에 있던 localStorage에서 할일목록 가져오기
    console.log(localStorage.getItem('할일목록'));

    let localStorageData = JSON.parse(localStorage.getItem('할일목록'));
    console.log("1", 할일목록);
    if (localStorageData == null) {
        할일목록 = [];
    }
    console.log("2", 할일목록);

    const 입력된투두 = document.querySelector('#inputTodo').value;
    목록번호++;
    console.log("2-0", 할일목록);
    할일목록.push({ "할일": 입력된투두, "했는가": '안했다', "목록인덱스": 목록번호, "삭제": false });
    console.log("2-1", 할일목록);
    localStorage.setItem('할일목록', JSON.stringify(할일목록));
    console.log("2-2", 할일목록);
    투두리스트화면갱신();
    document.querySelector('#inputTodo').value = "";
    console.log("3", 할일목록);

    console.log("4", 할일목록);
}

function 투두리스트화면갱신() {
    let 할일리스트 = '';
    let localData = JSON.parse(localStorage.getItem('할일목록'));
    console.log("5", 할일목록);
    if (localData == null) {
        할일목록 = [];
    } else {
        할일목록 = localData;
    }

    for (let i = 0; i < 할일목록.length; i++) {
        console.log("5-1", 할일목록);
        if (할일목록[i].했는가 == '안했다' && 할일목록[i].삭제 == false) {
            할일리스트 += `
            <div>
                <div>${할일목록[i].할일}</div>
                <button onclick="했는가스위치(${i})">변경</button>
                <button onclick="투두리스트에서삭제(${i})">삭제</button>
            </div>
        `;
        } else if (할일목록[i].했는가 == '했다' && 할일목록[i].삭제 == false) {
            할일리스트 += `
            <div>
                <div><del>${할일목록[i].할일}</del></div>
                <button onclick="했는가스위치(${i})">변경</button>
                <button onclick="투두리스트에서삭제(${i})">삭제</button>
            </div>
        `;
        }
        console.log("5-2", 할일목록);
    }
    localStorage.setItem('할일목록', JSON.stringify(할일목록));
    document.querySelector('#mylist').innerHTML = 할일리스트;
    console.log("6", 할일목록);
}

function 했는가스위치(번호) {
    if (할일목록[번호].했는가 == '안했다') {
        할일목록[번호].했는가 = '했다';
    } else {
        할일목록[번호].했는가 = '안했다';
    }
    투두리스트화면갱신();
    console.log(typeof 번호);
}

function 투두리스트에서삭제(번호) {
    if (할일목록[번호].삭제 == false) {
        할일목록[번호].삭제 = true;
    }

    console.log(할일목록);
    투두리스트화면갱신();

}