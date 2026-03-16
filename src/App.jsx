import React from 'react'
import TaskForm from './Components/TaskForm'
import './App.css'
import TaskList from './Components/TaskList'

function App() {

  return (
    <>
      <div className="parent flex h-screen items-center justify-center w-full">
        <TaskForm />
        <TaskList />
      </div>
    </>
  )
}

export default App
