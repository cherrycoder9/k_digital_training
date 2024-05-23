document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('#todoInput');
    const addButton = document.querySelector('#addButton');
    const tableBox = document.querySelector('#tableBox');
    let todoList = [];

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            todoList.push({ text: todoText, done: false });
            todoInput.value = '';
            render();
            alert('등록완료');
        }
    }

    function render() {
        tableBox.innerHTML = '';
        todoList.forEach((todo, index) => {
            const todoItem = document.createElement('div');
            todoItem.className = todo.done ? 'doneTodo' : 'willTodo';

            const todoText = document.createElement('div');
            todoText.textContent = todo.text;

            const todoActions = document.createElement('div');

            const updateButton = document.createElement('button');
            updateButton.textContent = '변경';
            updateButton.addEventListener('click', () => updateTodo(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.addEventListener('click', () => deleteTodo(index));

            todoActions.appendChild(updateButton);
            todoActions.appendChild(deleteButton);

            todoItem.appendChild(todoText);
            todoItem.appendChild(todoActions);

            tableBox.appendChild(todoItem);
        });
    }

    function updateTodo(index) {
        todoList[index].done = !todoList[index].done;
        render();
    }

    function deleteTodo(index) {
        todoList.splice(index, 1);
        render();
        alert('삭제완료');
    }
});
