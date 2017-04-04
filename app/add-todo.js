import React from 'react';

export default class AddTodo extends React.Component {
  addTodo(e) {
    e.preventDefault();
    //const newTodoName uses ref to access the value of the <input> of a new todo
    const newTodoName = this.refs.todoTitle.value;
    //props passed from todos has onNewTodo() that calls addTodo() in todos.js.
    if (newTodoName) {
      //if the <input> has a value, call onNewTodo and pass it the new todo with the name value set as the value typed into the <input>.

      this.props.onNewTodo({
        //onNewTodo() calls addTodo() from todos.js. It passes the new todo obj to todos.js through the onNewTodo prop, which calls the addTodo() from todos.js
        name: newTodoName
      });
      //?? resets <input> to empty string??
      this.refs.todoTitle.value = '';
    }
  }
  render() {
    return (
      <div className="add-todo">
        <input type="text" placeholder="Walk the dog" ref="todoTitle" />
        {/* <button> has an onclick that calls addTodo() as defined in add-todo.js */}
        <button onClick={(e) => this.addTodo(e) }>
          Add Todo
        </button>
      </div>
    )
  }
}
