//? MODEL
export default class ToDo {
    public id: number = 0;
    static id: any;
    constructor(public task: string, public completed: boolean = false) {
        this.id = ++ToDo.id;
        this.completed = completed;
        this.task = task;
    }
}

// module.exports = ToDo; //? EXPORTS