import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm'; 
import TodoList from './TodoList';
function App() {
  return (
    
    <div className="container">
    <h1 className="title">Todo List</h1>
    <TodoForm />
    <TodoList />
  </div>
    
  );
}

export default App;
