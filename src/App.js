
import { useState } from 'react';
import Add from './components/Add';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {


  const [showTask, setOnShowTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors',
      day: '5 de febrero',
      reminder: true
    },
    {
      id: 2,
      text: 'Cocinar en la tarde',
      day: '25 de febrero',
      reminder: true
    },
    {
      id: 3,
      text: 'salir de compras',
      day: '28 de febrero',
      reminder: false
    },
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id != id))
  }

  const onToggle = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
    console.log(tasks);
  }


  const addTask = (task) => {
    console.log(task);
  }

  return (
    <div className="container mt-4">
      <div className='card'>

        <Header onShow={() => setOnShowTask(!showTask)} showTask={showTask} />

        {showTask && <Add />}

        {
          tasks.length > 0 ? (
            <Tasks onDelete={deleteTask} tasks={tasks} onToggle={onToggle} />
          ) : (
            <div className='d-flex justify-content-center'>
              <h3>No hay tareas por mostrar</h3>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
