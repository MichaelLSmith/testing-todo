import React from 'react';
import Todo from './todo';
import AddTodo from './add-todo';

import {
  toggleDone,
  addTodo,
  deleteTodo
} from './state-functions';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    //state contains the todos as an array of todo objs
    this.state = {
      todos: [
        //each object has 3 values: ID, name and done boolean
        { id: 1, name: 'Write the blog post', done: false },
        { id: 2, name: 'Buy Christmas presents', done: false },
        { id: 3, name: 'Leave Santa his mince pies', done: false },
      ]
    }
  }

  toggleDone(id) {
    //calls toggleDone() as defined in state-functions.js
    this.setState(toggleDone(this.state, id));
  }

  addTodo(todo) {
    //calls addTodo() as defined in state-functions.js
    //var todo is
    this.setState(addTodo(this.state, todo));
  }

  deleteTodo(id) {
    //calls deleteTodo() as defined in state-functions.js
    this.setState(deleteTodo(this.state, id));
  }

  renderTodos() {
    console.log(this.state.todos);
    // maps over the todos array held in state and renders each one's structure
    return this.state.todos.map((todo) => {
      return (
        //each todo is made up an <li> with an id prop coming from the todo's id value
        <li key={todo.id}>
          {/* each todo Component is passed 3 props:
          todo - the entire todo object
          doneChange - the toggleDone function:passed id value
          deleteTodo - the deleteTodo function:passed id value */}
          <Todo
            todo={todo}
            doneChange={(id) => this.toggleDone(id)}
            deleteTodo={(id) => this.deleteTodo(id)} />
        </li>
      );
    });
  }

  render() {
    //todos Component renders the structure of the app.
    return (
      <div>
        <p>The <em>best</em> todo app out there.</p>
        <h1>Things to get done:</h1>
        {/* The <ul>uses the renderTodos fuction to render out each todo. */}
        <ul className="todos-list">{ this.renderTodos() }</ul>
        {/* //the addTodo Component is passed a prop that calls the addTodo function. The AddTodo component calls the addTodo() defined in todos.js. The todo variable is a obj with the value name set by the addTodo() in add-todo.js */}
        <AddTodo onNewTodo={(todo) => this.addTodo(todo)} />
      </div>
    )
  }
}
