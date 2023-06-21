import React from 'react';
import useTaskManager from './useTaskManager';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css'; 

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  return (
    <div className="app-container"> 
      <h1 className="app-title">Task Manager</h1> 
      <div className="task-manager-container">
        <TaskForm createTask={createTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    </div>
  );
}

export default App;
