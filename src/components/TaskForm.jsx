import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTaskContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    setFormData({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Medium'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Task Description"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="form-input"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm; 