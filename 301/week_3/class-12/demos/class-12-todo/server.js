'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname +'/public'));

const PORT = process.env.PORT || 3111;

const todos = [
  {task: 'drink coffee', dueDate: 'now' },
  {task: 'eat lunch', dueDate: 'soon'},
  {task: 'make server', dueDate: '1 hour'},
  {task: 'wash car', dueDate: '4 months'},

];


app.get('/todos', getTodos);
app.get('/todo:index', getTodo); 
app.post('/todo', createTodo);



function getTodos(req, res){
  res.render('pages/todos-list.ejs', {todos: todos});

}

function getTodo(req, res){
 
  const index = req.params.index;
  res.render('pages/single-todo.ejs', {todo: todos[index]});

}


function createTodo(req, res){

  todos.push(req.body);
  res.redirect('/todos');
  console.log('newnewnewnewnnew', todos);
}







app.listen(PORT, () => console.log(`SERVER up on PORT : ${PORT}`));
