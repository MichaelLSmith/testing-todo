import React from 'react';

export default class Todo extends React.Component {
  toggleDone() {
    //calls doneChange func in props. Passed from todos.js. Passed in the id of the todo
    //is called by onClick
    this.props.doneChange(this.props.todo.id);
  }

  deleteTodo(e) {
    //calls deleteTodo() in props passed from todos.js. Passed in the event obj from the onClick.
    e.preventDefault();
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    // console.log(this.props);
    // using destructuring, the const todo is equal to this.props.todo
    const { todo } = this.props;
    // className variable eqaul to 'done-todo' or empty string based on the value of the done value of the todo obj.
    const className = todo.done ? 'done-todo' : '';

    return (
      // div is returned with the class defined by the className variable above.
      // div is returned with the id of each todo
      <div className={`todo ${className} todo-${todo.id}`}>
        {/* p: has onClick that calls toggleDone() defined in todo.js. See above comment. */}
        <p className="toggle-todo" onClick={() => this.toggleDone() }>{ todo.name }</p>
        {/* a: triggers an onclick that sends the event to deleteTodo() defined in todo.js. See above comment. */}
        <a className="delete-todo" href="#" onClick={(e) => this.deleteTodo(e) }>Delete</a>
      </div>
    )
  }
}
