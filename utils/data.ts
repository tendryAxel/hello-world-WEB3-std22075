class Todo {
    id: Number;
    name: string;
    image: string;
    constructor (id: Number = 0, name: string = "", image: string = ""){
        this.id = id;
        this.name = name;
        this.image = image;
    }
}

export const allTodo = [
    new Todo(1, "todo1", ""),
    new Todo(2, "todo2", ""),
    new Todo(3, "todo3", ""),
    new Todo(4, "todo4", ""),
    new Todo(5, "todo5", ""),
    new Todo(6, "todo6", ""),
];