import logo from './logo.png';
import './App.css';
import AddToDo from './components/addToDo/addToDo';
import ToDoList from './components/toDoList/toDoList';
import ToDoSummary from './components/toDoSummary/toDoSummary';
import { useSelector } from 'react-redux';
import { toDoList } from './components/addToDo/addToDoSlice';

function App() {

  return (
    <div className="App">
      <img className='h-50' src={logo}/>
      <ToDoList />
      <AddToDo />
      <ToDoSummary />
    </div>
  );
}

export default App;
