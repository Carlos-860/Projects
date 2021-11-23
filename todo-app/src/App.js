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
  }

  render() {
    const todoItems = this.state.todos.map((item) => <TodoItem key={item.id} item={item} />);

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
