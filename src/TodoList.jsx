import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Button, Text, Paper, TextInput, Group } from '@mantine/core';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  // Verwende `useForm` für die Eingabe-Validierung
  const form = useForm({
    initialValues: { task: '' },
    validate: {
      task: (value) =>
        value.length < 2 ? 'Aufgabe muss mindestens 2 Buchstaben haben.' : null,
    },
  });

  // Aufgabe hinzufügen, falls die Eingabe gültig ist
  const addTask = () => {
    if (form.validate().hasErrors) return; // Überprüft, ob Validierungsfehler vorhanden sind
    setTasks([...tasks, form.values.task]);
    form.reset(); // Setzt das Eingabefeld nach dem Hinzufügen zurück
  };

  // Aufgabe löschen
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div style={{ width: '50vw' }}>
        <Group position="apart" grow style={{ width: '100%' }}>
          <TextInput
            label="Aufgabe"
            placeholder="Neue Aufgabe eingeben"
            withAsterisk
            {...form.getInputProps('task')} // Bindet `useForm` an das Textfeld
          />

          <Button onClick={addTask} variant="filled" color="indigo" mt="26px">
            Aufgabe hinzufügen
          </Button>
        </Group>

        {/* Paper-Komponente für die Aufgabenliste */}
        <Paper shadow="xl" radius="md" p="md" withBorder mt="md">
          <Text weight={700}>Aufgabenliste:</Text>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <Group key={index} position="apart" mb="xs">
                <Text>{task}</Text>
                <Button color="red" size="xs" onClick={() => deleteTask(index)}
                  style={{ marginLeft: 'auto'}}>
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
