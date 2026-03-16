import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskData) => {
    const newTask = { ...taskData, id: Date.now(), completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <Header hasTasks={tasks.length > 0} />

      <Routes>
        <Route path="/" element={<TaskForm addTask={addTask} />} />
        <Route path="/tasks" element={<TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />} />
      </Routes>
    </>
  )
}

export default App