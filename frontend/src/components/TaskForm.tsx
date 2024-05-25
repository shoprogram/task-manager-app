// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import { Task } from '../store/taskSlice';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: 'pending'
    };
    dispatch(addTask(newTask));
    setTitle('');
    setDescription('');
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Add New Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          margin="normal"
        />
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Add Task
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default TaskForm;
