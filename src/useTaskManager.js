import { useState } from 'react';

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? updatedTask : task))
    );
  };

  return { tasks, createTask, deleteTask, updateTask };
}

export default useTaskManager;
