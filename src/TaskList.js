import React from 'react';

function TaskList({ tasks, deleteTask, updateTask }) {
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleUpdateTask = (taskId) => {
    const updatedTask = {
      id: taskId,
      name: 'Tarea actualizada',
    };
    updateTask(taskId, updatedTask);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.name}</span>
          <button onClick={() => handleDeleteTask(task.id)}>Borrar</button>
          <button onClick={() => handleUpdateTask(task.id)}>Actualizar</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

