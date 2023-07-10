import ToDo from "../models/Todo";

export default interface ServiceInterface {
    addTodo(text: string, completed: boolean): Promise<ToDo>;
    getAllTodos(): Promise<ToDo[]>;
    getTodo(id: number): Promise<ToDo>;
    deleteTodo(id: number): Promise<ToDo>;
    updateTodo(id: number): Promise<ToDo>;
}