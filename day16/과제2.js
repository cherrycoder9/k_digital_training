할일목록 = [];

function 할일추가() {
    const 입력된투두 = document.querySelector('#inputTodo').value;
    할일목록.push({ 할일: 입력된투두, 했는가: '안했다' });
    투두리스트화면갱신();
}
function 투두리스트화면갱신() {
    let 할일리스트 = '';
    for (let i = 0; i < 할일목록.length; i++) {
        if (할일목록[i].했는가 == '안했다') {
            할일리스트 += `
            <div>${할일목록[i].할일}</div>
            <button onclick="했는가스위치()">변경</button>
            <button onclick="투두리스트에서삭제()">삭제</button>
        `;
        } else {
            할일리스트 += `
            <div><del>${할일목록[i].할일}</del></div>
            <button onclick="했는가스위치()">변경</button>
            <button onclick="투두리스트에서삭제()">삭제</button>
        `;
        }

    }
    document.querySelector('#mylist').innerHTML = 할일리스트;
}
console.log(할일목록);