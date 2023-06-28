import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, name: 'Task 2', description: 'Description 2', completed: false },
    { id: 3, name: 'Task 3', description: 'Description 3', completed: true },
  ]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const uncompleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: false } : task
      )
    );
  };

  const deleteTask = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.length < 3) {
      alert('Task name should have at least 3 characters.');
      return;
    }
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        name: taskName,
        description: taskDescription,
        completed: false,
      },
    ]);
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>

      <div className="add-task">
        <h2>Add Task</h2>
        <form onSubmit={addTask}>
          <label>
            Task Name:
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          </label>
          <br />
          <label>
            Task Description:
            <input
              type="text"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="pending-tasks">
        <h2>Pending Tasks</h2>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <div key={task.id} className="task">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <button className="complete-button" onClick={() => completeTask(task.id)}>
                Complete Task
              </button>
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          ))}
      </div>

      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <div key={task.id} className="task">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <button className="uncomplete-button" onClick={() => uncompleteTask(task.id)}>
                Uncomplete Task
              </button>
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
