const express = require('express');

//? body of request is passed through alternate stream
const bodyParser = require('body-parser');
const app =  express();

//? We need to tell express to parse the body in different format;
app.use(bodyParser.json());
app.use(express.urlencoded());

let todoList = [
    {id: 1, task: 'Do laundry', completed: false},
    {id: 2, task: 'Do homework', completed: false},
];

//? C -> POst
app.post("/", (req, res) => {
    //? req.body is the body of the request that we can access now
    const body = req.body;

    const lastId = todoList.at(-1)?.id + 1 ?? 1;
    const todo = {
        id: lastId, 
        task: body.task, 
        completed: body.completed.toLowerCase == "true" ? true : false
    };
    todoList.push(todo);
    res.send(todo);
})

//? R -> GET
app.get("/", (req, res) => {
    res.send(todoList)
});

app.get("/:id", (req, res) => {
    const found = todoList.find(todo => todo.id === +req.params.id);
    if (found) {
        res.send(found);
    } else {
        res.status(404).send(req.params.id + "not found");
        res.send()
    }
});

//? U -> PUT
app.put("/:id", (req, res) => {
    const found = todoList.find(todo => todo.id === +req.params.id);
    if (found) {
        found.completed = !found.completed;
        res.send(found);
    } else {
        res.status(404).send(req.params.id + "not found");
        res.send()
    }
});

//? D -> DELETE
app.delete("/:id", (req, res) => {
    const found = todoList.find(todo => todo.id === +req.params.id);
    if (found) {
        todoList = todoList.filter(todo => todo.id !== +req.params.id);
        res.send(found);
    } else {
        res.status(404).send(req.params.id + "not found");
        res.send()
    }
});

app.listen(12000, ()=> {console.log("Server is listening on port 12000")})