// const ToDo = require('./Todo.js');
import ToDo from './Todo.js';

export default class LocalService {

    todoList = [];

    constructor() {
        this.loadTodoList();
    }

    //Create
    async addTodo(text, completed) {
        const todo = new ToDo(text, completed);
        this.todoList.push(todo);
        this.saveTodoList();
        return todo;
    }

    //Read
    async getAllTodos() {
        return this.todoList;
    }

    async getTodo(id) {
        return this.todoList.find(todo => todo.id === id);
    }

    //Update
    async updateTodo(id) {
        const found = this.todoList.find(todoItem => todoItem.id === id)
        if(found)
            found.completed = !found.completed;
        this.saveTodoList();
    }

    //Delete
    async deleteTodo(id) {
        this.todoList = this.todoList.filter(todoItem => todoItem.id !== id);
        this.saveTodoList();
    }
    
    saveTodoList() {
        localStorage.setItem('todo', JSON.stringify(this.todoList));
    }

    loadTodoList() {
        this.todoList = JSON.parse(localStorage.getItem("todo") ?? "[]");
        ToDo.id = this.todoList.at(-1)?.id ?? 0;
        return this.todoList;
    }
}

// module.exports = LocalService;