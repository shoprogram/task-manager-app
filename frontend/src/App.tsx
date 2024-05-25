// src/App.tsx
import React from 'react';
import { Container, CssBaseline, AppBar, Toolbar, Typography, Box } from '@mui/material';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Task Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <TaskList />
        </Box>
      </Container>
      <Box mt={5} component="footer" bgcolor="primary.main" color="white" py={3}>
        <Container>
          <Typography variant="body1" align="center">
            © 2023 Task Manager. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default App;
