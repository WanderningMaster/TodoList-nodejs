let todos = [];

module.exports = class Todo {
    constructor(text) {
        this.text = text;
        this.id = todos.length;
    }
    save(){
        todos.push(this);
    }
    static delete(id){
        todos = todos.filter(element => element.id != id);
    }
    static getAll(){
        return todos;
    }
}