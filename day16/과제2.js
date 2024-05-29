할일목록 = [];
목록번호 = 0;

function 할일추가() {
    const 입력된투두 = document.querySelector('#inputTodo').value;
    목록번호++;
    할일목록.push({ 할일: 입력된투두, 했는가: '안했다', 목록인덱스: 목록번호, 삭제: false });
    투두리스트화면갱신();
    document.querySelector('#inputTodo').value = "";
    console.log(할일목록);
}

function 투두리스트화면갱신() {
    let 할일리스트 = '';
    for (let i = 0; i < 할일목록.length; i++) {
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

    }
    document.querySelector('#mylist').innerHTML = 할일리스트;
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