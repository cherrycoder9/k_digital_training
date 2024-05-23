let todoList = [];
let todoSwitch = [];

function add() {
    let todoInput = document.querySelector('#todoList');

    let todo = todoInput.value;

    todoList.push(todo);

    alert('항목 저장 성공');

    print();


}


function print() {
    let html = ``;

    for (let i = 0; i < todoList.length; i++) {
        let currentTodo = todoList[i];

        html += `
            <tr>
                <div><td>${currentTodo}</td></div>
                <div>
                    <td onclick="update(${i})"><button>변경</button></td>
                    <td onclick="remove(${i})"><button>삭제</button></td>
                </div>   
            </tr>
        `;
    }

    tableBox.innerHTML = html;

}

function remove(index) {
    todoList.splice(index, 1);
    print();

}










