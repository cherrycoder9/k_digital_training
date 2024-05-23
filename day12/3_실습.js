let todoList = [];
let todoSwitch = [];

function add() {
    let todoInput = document.querySelector('#todoList');

    let todo = todoInput.value;

    todoList.push(todo);
    todoSwitch.push(0);

    alert('해야할일 추가 ');

    todoInput.value = null;

    print();

}


function print(toggle, index) {

    // let tableBox = document.querySelector('#tableBox'); console.log(tableBox);


    let html = ``;

    for (let i = 0; i < todoList.length; i++) {
        let currentTodo = todoList[i];
        if (toggle == 0) {

            html += `
                <div class="willTodo">
                    <div>${currentTodo}</div>
                    <div>
                        <button onclick="update(${i})">변경</button>
                        <button onclick="remove(${i})">삭제</button>
                    </div>   
                </div>
                `;
            todoSwitch[index] = 1;
        }
        else {
            html += `

                <div class="doneTodo">
                    <div>${currentTodo}</div>
                    <div>
                        <button onclick="update(${i})">변경</button>
                        <button onclick="remove(${i})">삭제</button>
                    </div>   
                </div>
            `;
            todoSwitch[index] = 0;
        }

    }

    tableBox.innerHTML = html;
}


function remove(index) {

    todoList.splice(index, 1);
    todoSwitch.splice(index, 1);

    print();

}

function update(index) {
    if (todoSwitch[index] == 0) {
        print(0, index);
    }
    else { print(1, index); }


}










;;
