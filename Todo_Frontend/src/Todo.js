//? MODEL
export default class ToDo {
    static id = 0;
    constructor(task, completed) {
        this.id = ++ToDo.id;
        this.completed = completed;
        this.task = task;
    }
}

// module.exports = ToDo; //? EXPORTS