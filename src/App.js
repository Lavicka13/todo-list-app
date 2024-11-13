import React from 'react';
import { MantineProvider } from '@mantine/core';
import TodoList from './TodoList';
import '@mantine/core/styles.css';



function App() {
  return (
    <MantineProvider>
      <div>
      <TodoList />
      </div>
    </MantineProvider>
  );
}

export default App;
