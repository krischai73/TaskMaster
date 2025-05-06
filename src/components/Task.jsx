import { useTaskContext } from '../context/TaskContext';

const Task = ({ task }) => {
  const { deleteTask } = useTaskContext();
  const { id, title, description, dueDate, priority } = task;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  };

  return (
    <div className={`task-item ${getPriorityColor(priority)}`}>
      <div className="task-header">
        <h3>{title}</h3>
        <span className={`priority-badge ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      </div>
      
      <p className="task-description">{description}</p>
      
      <div className="task-footer">
        <span className="due-date">
          Due: {new Date(dueDate).toLocaleDateString()}
        </span>
        <button 
          onClick={() => deleteTask(id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task; 