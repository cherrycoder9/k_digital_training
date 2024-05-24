document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoListEl = document.getElementById('todoList');
    let todos = [];

    addBtn.addEventListener('click', addTodo);

    function addTodo() {
        const todo = todoInput.value.trim();
        if (todo !== '') {
            todos.push({ text: todo, done: false });
            todoInput.value = '';
            renderTodos();
            alert('등록완료');
        }
    }

    function updateTodoIndex(index) {
        todos[index].done = !todos[index].done;
        renderTodos();
    }

    function removeTodoIndex(index) {
        todos.splice(index, 1);
        renderTodos();
        alert('삭제완료');
    }

    function renderTodos() {
        todoListEl.innerHTML = todos.map((todo, index) => `
            <div class="todoItem ${todo.done ? 'doneTodo' : 'willTodo'}">
                <div>${todo.text}</div>
                <div>
                    <button onclick="updateTodoIndex(${index})">변경</button>
                    <button onclick="removeTodoIndex(${index})">삭제</button>
                </div>   
            </div>
        `).join('');
    }

    window.updateTodoIndex = updateTodoIndex;
    window.removeTodoIndex = removeTodoIndex;

    renderTodos();
});
