import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
