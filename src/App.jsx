import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import Toast from './Components/Toast'

function App() {
  const [tasks, setTasks] = useState([])
  const [toast, setToast] = useState(null)
  const [editingTask, setEditingTask] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      logs: [{ action: 'created', timestamp: new Date().toLocaleString() }]
    }
    setTasks([...tasks, newTask])
    showToast(`✨ Task "${taskData.title}" added successfully!`, 'success')
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const updatedTask = {
          ...task,
          completed: !task.completed,
          updatedAt: new Date().toLocaleString()
        }
        updatedTask.logs = [
          ...task.logs,
          {
            action: task.completed ? 'marked incomplete' : 'marked complete',
            timestamp: new Date().toLocaleString()
          }
        ]
        return updatedTask
      }
      return task
    }))
  }
  const deleteTask = (id) => {
    const taskToDelete = tasks.find(t => t.id === id)
    setTasks(tasks.filter(task => task.id !== id))
    showToast(`🗑️ Task "${taskToDelete?.title}" deleted!`, 'delete')
  }

  const updateTask = (id, updatedData) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const updatedTask = {
          ...task,
          ...updatedData,
          updatedAt: new Date().toLocaleString()
        }
        updatedTask.logs = [
          ...task.logs,
          {
            action: 'edited',
            timestamp: new Date().toLocaleString()
          }
        ]
        return updatedTask
      }
      return task
    }))
    showToast(`✏️ Task updated successfully!`, 'success')
    setEditingTask(null)
  }

  return (
    <div className=" bg-linear-to-br from-gray-950 via-slate-900 to-black text-white overflow-hidden">

      <div className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header hasTasks={tasks.length > 0} isFormPage={true} />
                <TaskForm
                  addTask={addTask}
                  editingTask={editingTask}
                  onUpdate={updateTask}
                />
              </>
            }
          />
          <Route
            path="/tasks"
            element={
              <>
                <Header hasTasks={tasks.length > 0} isFormPage={false} />
                <TaskList
                  tasks={tasks}
                  toggleComplete={toggleComplete}
                  deleteTask={deleteTask}
                  onEdit={setEditingTask}
                />
              </>
            }
          />
        </Routes>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} />}

    </div>
  )
}

export default App