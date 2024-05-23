let todoList = [];
let todoSwitch = [];

function add() {
    let todoInput = document.querySelector('#todoList');

    let todo = todoInput.value;
    todoList.push(todo);
    todoSwitch.push(0);

    alert('등록완료 ');

    todoInput.value = null;

    print();
    console.log(todoSwitch); // 콘솔 로그 테스트 // 콘솔 로그 테스트

}


function print(toggle, index) {
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
    console.log(todoSwitch); // 콘솔 로그 테스트 // 콘솔 로그 테스트
}


function remove(index) {
    todoList.splice(index, 1);
    todoSwitch.splice(index, 1);
    console.log(todoSwitch); // 콘솔 로그 테스트 // 콘솔 로그 테스트
    print();
    alert('삭제완료');

}

function update(index) {
    if (todoSwitch[index] == 0) {
        print(0, index);
    }
    else { print(1, index); }
    console.log(todoSwitch); // 콘솔 로그 테스트 // 콘솔 로그 테스트
}










;;
