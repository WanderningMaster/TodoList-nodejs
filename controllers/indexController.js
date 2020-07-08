const Todo = require('../models/todo');

exports.index = function(req, res){
    res.render('index', {
        todoS: Todo.getAll()
    });
}

exports.del = function (req, res) {
    Todo.delete(req.body.data);
    console.log(Todo.getAll());
    res.redirect('/');
}