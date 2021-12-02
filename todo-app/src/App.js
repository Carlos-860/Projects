import TodoItem from './components/TodoItem';
import todosData from './todoData';

// function App() {
//   const todoItems = TodoData.map((item) => <TodoItem key={item.id} item={item} />);

//   return <div className="todo-list">{todoItems}</div>;
// }

// export default App;

import React from 'react';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todosData,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const UpdatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = todo.completed ? false : true;
        }

        return todo;
      });

      return {
        todos: UpdatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />);

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
