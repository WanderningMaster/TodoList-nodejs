const Todo = require('../models/todo');

exports.add = function(req, res){
    res.render('add');
}

exports.postTodo = function (req, res) {
    const name = req.body.Todo;
    const todo = new Todo(name);
    todo.save();
    res.redirect('/');
}