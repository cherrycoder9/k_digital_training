let todoList = [];
let todoSwitch = [];

function add() {
    let todoInput = document.querySelector('#todoList');

    let todo = todoInput.value;

    todoList.push(todo);

    alert('항목 저장 성공');

    print();



}


function print(toggle) {


    let html = ``;

    for (let i = 0; i < todoList.length; i++) {
        let currentTodo = todoList[i];
        if (toggle == 0) {
            html += `
                <tr class="willTodo">
                    <div><td>${currentTodo}</td></div>
                    <div>
                        <td onclick="update(${i})"><button>변경</button></td>
                        <td onclick="remove(${i})"><button>삭제</button></td>
                    </div>   
                </tr>
                `;
        }
        else {
            html += `
            <tr class="doneTodo">
                <div><td>${currentTodo}</td></div>
                <div>
                    <td onclick="update(${i})"><button>변경</button></td>
                    <td onclick="remove(${i})"><button>삭제</button></td>
                </div>
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


}










;;
