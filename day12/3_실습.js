let todoList = [];
let todoSwitch = [];

function add() {
    let todoInput = document.querySelector('#todoList');

    let todo = todoInput.value;

    todoList.push(todo);
    todoSwitch.push(0);

    alert('항목 저장 성공');

    todoInput.value = null;

    print();

}


function print(toggle) {

    // let tableBox = document.querySelector('#tableBox'); console.log(tableBox);


    let html = ``;

    for (let i = 0; i < todoList.length; i++) {
        let currentTodo = todoList[i];
        if (toggle == 0) {
            html += `
                <tr>
                <td class="willTodo">
                    <div>${currentTodo}</div>
                    <div>
                        <button onclick="update(${i})">변경</button>
                        <button onclick="remove(${i})">삭제</button>
                    </div>   
                    </td>
                </tr>
                `;
        }
        else {
            html += `
            <tr>
                <td class="doneTodo">
                    <div>${currentTodo}</div>
                    <div>
                        <button onclick="update(${i})">변경</button>
                        <button onclick="remove(${i})">삭제</button>
                    </div>   
                </td>
            </tr>
            `;
        }

    }

    tableBox.innerHTML = html;
}


function remove(index) {

    todoList.splice(index, 1);
    print();

}

function update(index) {
    if (todoSwitch[index] == 0) {
        print(0);
    }
    else { print(1); }


}










;;
