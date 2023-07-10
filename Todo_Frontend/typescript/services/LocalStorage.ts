import ServiceInterface from './Serviceinterface.js';
import ToDo from '../models/Todo.js';

export default class LocalService implements ServiceInterface {

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

    async getTodo(id: number): Promise<ToDo> {
        return this.todoList.find(todo => todo.id === id)!;
    }

    //Update
    async updateTodo(id: number): Promise<ToDo> {
        const found = this.todoList.find(todoItem => todoItem.id === id)
        if(found)
            found.completed = !found.completed;
        this.saveTodoList();
        return found!;
    }

    //Delete
    async deleteTodo(id: number): Promise<ToDo> {
        const found = this.todoList.find(todoItem => todoItem.id === id);
        this.todoList = this.todoList.filter(todoItem => todoItem.id !== id);
        this.saveTodoList();
        return found!;
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