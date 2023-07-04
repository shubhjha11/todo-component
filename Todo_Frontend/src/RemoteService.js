import ToDo from "./Todo.js";

export default class RemoteService {
    url = 'http://localhost:12000';

    async getAllTodos() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }

    async addTodo (text, completed) {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(new ToDo(text, completed)),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }

    async getTodo (id) {
        const response = await fetch(`${this.url}/${id}`);
        return await response.json();
    }

    async updateTodo (id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'PUT'
        });
        return await response.json();
    }

    async deleteTodo (id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    }
}