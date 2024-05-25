// src/components/TaskItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Task, deleteTask, updateTask } from '../store/taskSlice';
import { ListItem, ListItemText, IconButton, ListItemSecondaryAction, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import UndoIcon from '@mui/icons-material/Undo';

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
    <Paper elevation={1} style={{ margin: '10px 0', padding: '10px' }}>
      <ListItem>
        <ListItemText
          primary={task.title}
          secondary={task.description}
          style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={handleToggleStatus}>
            {task.status === 'pending' ? <CheckIcon /> : <UndoIcon />}
          </IconButton>
          <IconButton edge="end" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
};

export default TaskItem;
