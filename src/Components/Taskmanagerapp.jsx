import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import Toast from './Toast'

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
                const updatedTask = { ...task, completed: !task.completed, updatedAt: new Date().toLocaleString() }
                updatedTask.logs = [
                    ...task.logs,
                    { action: task.completed ? 'marked incomplete' : 'marked complete', timestamp: new Date().toLocaleString() }
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
                const updatedTask = { ...task, ...updatedData, updatedAt: new Date().toLocaleString() }
                updatedTask.logs = [
                    ...task.logs,
                    { action: 'edited', timestamp: new Date().toLocaleString() }
                ]
                return updatedTask
            }
            return task
        }))
        showToast(`✏️ Task updated successfully!`, 'success')
        setEditingTask(null)
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-950 via-slate-900 to-black text-white overflow-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header hasTasks={tasks.length > 0} isFormPage={true} />
                            <TaskForm addTask={addTask} editingTask={editingTask} onUpdate={updateTask} />
                        </>
                    } />
                    <Route path="/tasks" element={
                        <>
                            <Header hasTasks={tasks.length > 0} isFormPage={false} />
                            <TaskList
                                tasks={tasks}
                                toggleComplete={toggleComplete}
                                deleteTask={deleteTask}
                                onEdit={setEditingTask}
                            />
                        </>
                    } />
                </Routes>
            </div>

            {toast && <Toast message={toast.message} type={toast.type} />}
        </div>
    )
}

export default App