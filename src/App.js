import React from 'react';
import { ChakraProvider, CSSReset, extendTheme, Box, Button, useColorMode } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { mode } from '@chakra-ui/theme-tools';
import useTaskManager from './useTaskManager';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
 import './App.css';

const colors = {
  light: {
    bg: '#ffffff',
    text: '#333333',
  },
  dark: {
    bg: '#1a1a1a',
    text: '#ffffff',
  },
};

const theme = extendTheme({
  colors,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

const globalStyles = css`
  body {
    background-color: ${mode('colors.light.bg', 'colors.dark.bg')};
    color: ${mode('colors.light.text', 'colors.dark.text')};
  }
`;

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <Global styles={globalStyles} />
      <div className="task-manager">
        <Box display="flex" justifyContent="flex-end" p={4}>
          <Button onClick={toggleColorMode} mr={2}>
            {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Box>

        <h1>Task Manager</h1>

        <div className="add-task">
          <h2>Add Task</h2>
          <TaskForm createTask={createTask} />
        </div>

        <div className="pending-tasks">
          <h2>Pending Tasks</h2>
          <TaskList tasks={tasks.filter((task) => !task.completed)} deleteTask={deleteTask} updateTask={updateTask} />
        </div>

        <div className="completed-tasks">
          <h2>Completed Tasks</h2>
          <TaskList tasks={tasks.filter((task) => task.completed)} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
