import React from 'react'
import TaskForm from './Components/TaskForm'
import './App.css'
import TaskList from './Components/TaskList'

function App() {

  return (
    <>
      <div className="section flex items-center justify-center h-screen w-full max-w-fit m-auto">
        <div className="parent flex h-176 overflow-hidden  items-center justify-between max-w-7xl m-auto gap-12 ">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </>
  )
}

export default App
