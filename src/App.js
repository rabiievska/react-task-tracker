import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Nov 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at Office',
        day: 'Nov 6th at 12:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food shopping',
        day: 'Nov 5th at 18:30pm',
        reminder: false,
      }
    ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  };
  
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No Tasks</p>
      )}
    </div>
  );
}

export default App
