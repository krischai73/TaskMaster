import { useTaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet. Add one to get started!</p>
      ) : (
        tasks.map(task => (
          <Task key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskList; 