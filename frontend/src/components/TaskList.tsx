import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { Container, List, Typography } from '@mui/material';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Task List
      </Typography>
      <TaskForm />
      <List>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
