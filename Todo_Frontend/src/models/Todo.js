//? MODEL
export default class ToDo {
    task;
    completed;
    id = 0;
    static id;
    constructor(task, completed = false) {
        this.task = task;
        this.completed = completed;
        this.id = ++ToDo.id;
        this.completed = completed;
        this.task = task;
    }
}
// module.exports = ToDo; //? EXPORTS
