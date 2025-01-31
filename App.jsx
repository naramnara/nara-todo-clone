import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
const App = () => {
  return (
    <div>
      <h1>list of tasks</h1>
      <TaskList />
    </div>
  );
}

export default App;
