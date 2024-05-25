import React from 'react';
import { useDispatch } from 'react-redux';
import { Task, deleteTask, updateTask } from '../store/taskSlice';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleStatus = () => {
    dispatch(updateTask({ ...task, status: task.status === 'pending' ? 'completed' : 'pending' }));
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleToggleStatus}>
        {task.status === 'pending' ? 'Complete' : 'Reopen'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
