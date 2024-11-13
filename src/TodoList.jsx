import React, { useState } from 'react';
import { Button, Text, Paper, TextInput, Group } from '@mantine/core';

function TodoList() {
  
  const [taskInput, setTaskInput] = useState('');
 
  const [tasks, setTasks] = useState([]);

  
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
    <div>
    <Group position="apart" style={{ width: '100%' }}>
      <TextInput
        value={taskInput}
        onChange={(e) => setTaskInput(e.currentTarget.value)}
        placeholder="Neue Aufgabe eingeben"
        label="Aufgabe"
        withAsterisk
      />

      {/* Mantine Button zum Hinzufügen der Aufgabe */}
      <Button onClick={addTask} variant="filled" color="indigo" mt="md">
        Aufgabe hinzufügen
      </Button>
      </Group>

      {/* Paper-Komponente für die Aufgabenliste */}
      <Paper shadow="xl" radius="md" p="md" withBorder>
        <Text weight={700} >
          Aufgabenliste:
        </Text>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Group key={index} position="apart" mb="xs">
              <Text>
                {task}
              </Text>
              <Button position="right" color="red" size="xs" onClick={() => deleteTask(index)}>
                Löschen
              </Button>
            </Group>
          ))
        ) : (
          <Text color="dimmed">Keine Aufgaben hinzugefügt.</Text>
        )}
      </Paper>
    </div>
    </div>
  );
}

export default TodoList;
