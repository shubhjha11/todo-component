// const ToDo = require('./Todo.js');
import ToDo from './Todo.js';

export default class SessionService {

    private todoList: ToDo[] = [];

    constructor() {
        this.loadTodoList();
    }

    //Create
    async addTodo(text: string, completed: boolean): Promise<ToDo> {
        const todo = new ToDo(text, completed);
        this.todoList.push(todo);
        this.saveTodoList();
        return todo;
    }

    //Read
    async getAllTodos() {
        return this.todoList;
    }

    async getTodo(id: number) {
        return this.todoList.find(todo => todo.id === id);
    }

    //Update
    async updateTodo(id: number) {
        const found = this.todoList.find(todoItem => todoItem.id === id)
        if(found)
            found.completed = !found.completed;
        this.saveTodoList();
    }

    //Delete
    async deleteTodo(id: number) {
        this.todoList = this.todoList.filter(todoItem => todoItem.id !== id);
        this.saveTodoList();
    }
    
    saveTodoList() {
        sessionStorage.setItem('todo', JSON.stringify(this.todoList));
    }

    loadTodoList() {
        this.todoList = JSON.parse(sessionStorage.getItem("todo") ?? "[]");
        ToDo.id = this.todoList.at(-1)?.id ?? 0;
        return this.todoList;
    }
}

// module.exports = SessionService;