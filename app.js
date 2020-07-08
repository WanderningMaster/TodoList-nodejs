let express = require('express');
let bodyParser = require('body-parser');
let indexController = require('./controllers/indexController');
let todosController = require('./controllers/todosController');

let app = new express();
const jsonParser = express.json();
const Parser = bodyParser.urlencoded({extended: false});

app.set('views', 'views');
app.set('view engine', 'ejs');


app.get('/', indexController.index);
app.get('/add', todosController.add);
app.post('/postTodo', Parser, todosController.postTodo);
app.post('/del', Parser, indexController.del);

app.listen(3000);