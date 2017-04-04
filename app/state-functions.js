export function toggleDone(state, id) {
  //called by toggleDone() in todos.js
  //has two arguments state and id. is passed this.state and the id of the todo
  const todos = state.todos.map((todo) => {
    //toggles the done value of the todo between false to true
    if (todo.id === id) {
      todo.done = !todo.done;
    }
    return todo;
  });
  return todos;
}

export function addTodo(state, todo) {
  //called by addTodo() in todos.js
  //has two args: state and todo. is passed this.state and each todo as passed to AddTodo component as a prop.
  const lastTodo = state.todos[state.todos.length - 1];
  todo.id = lastTodo.id + 1;
  todo.done = false;

  return {
    todos: state.todos.concat([todo])
  };
}

export function deleteTodo(state, id) {
  return {
    todos: state.todos.filter((todo) => todo.id !== id)
  };
}
