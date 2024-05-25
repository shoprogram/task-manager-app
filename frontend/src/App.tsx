import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Task Manager</h1>
        </header>
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
