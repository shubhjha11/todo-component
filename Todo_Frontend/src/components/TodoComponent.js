export default class ToDoComponent {
    service;
    // todoList = sessionStorage.getItem("todo") ? JSON.parse(sessionStorage.getItem("todo")) : [];
    todoUL;
    addButton;
    todoInput;
    constructor(service) {
        this.service = service;
        // VIEW
        const template = `
        <div id="container">
            <h3>To-Do App</h3>
            <input id="todo-input" type="text">
            <button type="button" id="add-button">Add</button>
            <ul id="todo-ul">            
            </ul>
        </div>
        `;
        const appTodo = document.querySelector('app-todo');
        appTodo?.insertAdjacentHTML('beforeend', template);
        this.todoUL = document.querySelector('#todo-ul');
        this.addButton = document.querySelector('#add-button');
        this.todoInput = document.querySelector('#todo-input');
        this.service.getAllTodos().then(todoList => {
            todoList.forEach(todo => {
                this.renderToDos(todo);
            });
        });
        // CONTROLLER
        this.addButton.addEventListener('click', () => {
            if (this.todoInput.value === '')
                return;
            // const todo = new ToDo(this.todoInput.value, false);
            // this.todoList.push(todo);
            // this.service.saveTodoList(this.todoList);
            const todo = this.service.addTodo(this.todoInput.value, false).then(todo => {
                this.renderToDos(todo);
            });
            // this.renderToDos(todo);
            this.todoInput.value = '';
        });
    }
    // loadTodolist() {
    //     this.todoList = JSON.parse(sessionStorage.getItem("todo")) ?? [];
    //     // Load previous todos
    //     this.todoList.forEach(todo => {
    //         this.renderToDos(todo);
    //     });
    //     ToDo.id = this.todoList.at(-1).id;
    // }
    renderToDos(todo) {
        this.todoUL.insertAdjacentHTML('afterbegin', `
        <li id="todo-${todo.id}">
            <input type="checkbox" ${todo.completed ? "checked" : ""} />
            <label>${todo.task}</label>
            <button type="button" id="delete-button">x</button>
        </li>
        `);
        this.completeHandler(todo);
        this.deleteHandler(todo);
    }
    completeHandler(todo) {
        document.querySelector(`#todo-${todo.id} > input`)?.addEventListener('click', () => {
            // this.todoList.find(todoItem => todoItem.id === todo.id).completed = !todo.completed;
            // this.service.saveTodoList(this.todoList);
            this.service.updateTodo(todo.id);
        });
    }
    deleteHandler(todo) {
        document.querySelector(`#todo-${todo.id} > button`)?.addEventListener('click', () => {
            // const todoIndex = this.todoList.findIndex(todoItem => todoItem.id === todo.id);
            // this.todoList.splice(todoIndex, 1);
            document.querySelector(`#todo-${todo.id}`)?.remove();
            // this.todoList = this.todoList.filter(todoItem => todoItem.id !== todo.id);
            // this.service.saveTodoList(this.todoList);
            this.service.deleteTodo(todo.id);
        });
    }
}
// module.exports = ToDoComponent;
