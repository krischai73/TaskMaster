import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <header>
          <h1>TaskMaster</h1>
        </header>
        <main>
          <TaskForm />
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;
