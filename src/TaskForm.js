import React, { useState } from 'react';

function TaskForm({ createTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.length >= 3) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
      };
      createTask(newTask);
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('El nombre de la tarea debe tener al menos 3 caracteres');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
        placeholder="Nombre de la tarea"
      />
      <textarea
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
        placeholder="Descripción de la tarea (opcional)"
      />
      <button type="submit">Crear tarea</button>
    </form>
  );
}

export default TaskForm;


