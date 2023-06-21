import React, { useState } from 'react';

function TaskForm({ createTask }) {
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
    };
    createTask(newTask);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskName} onChange={handleTaskNameChange} />
      <button type="submit">Crear tarea</button>
    </form>
  );
}

export default TaskForm;

