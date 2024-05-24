let todos = [];

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoListEl = document.getElementById('todoList');

const addTodo = () => {
    const todo = todoInput.value.trim();
    if (todo !== '') {
        todos.push({ text: todo, done: false });
        todoInput.value = '';
        renderTodos();
    }
};

const updateTodo = index => {
    todos[index].done = !todos[index].done;
    renderTodos();
};

const removeTodo = index => {
    todos.splice(index, 1);
    renderTodos();
};

const getTodoItemHtml = (todo, index) => {
    return `
        <div class="todoItem ${todo.done ? 'doneTodo' : 'willTodo'}">
            <div>${todo.text}</div>
            <div>
                <button onclick="updateTodo(${index})">변경</button>
                <button onclick="removeTodo(${index})">삭제</button>
            </div>   
        </div>
    `;
};

const renderTodos = () => {
    todoListEl.innerHTML = todos.map((todo, index) => getTodoItemHtml(todo, index)).join('');
};

addBtn.addEventListener('click', addTodo);

renderTodos();