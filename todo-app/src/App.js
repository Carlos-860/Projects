import TodoItem from './components/TodoItem';
import TodoData from './todoData';

function App() {
  const todoItems = TodoData.map((item) => <TodoItem key={item.id} item={item} />);

  return <div className="todo-list">{todoItems}</div>;
}

export default App;
