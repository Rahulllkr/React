import React, { useState } from 'react'
import TaskForm from './components/TaskForm'

import './App.css'

function App() {

  const [tasks,setTasks] = useState([]);

  const handleTaskUpdate = (taskData) => {
    const newTask = {
      Title : taskData.title,
      Category : taskData.category
    }
    setTasks(
      [...tasks,newTask]     
    )
    console.log(tasks)
  }

  return (
    <div className="app-container" style={{ minHeight: '100vh', background: '#f4f6fb', padding: '40px 0' }}>
      <div className="header" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ color: '#2d3748', fontSize: '2.5rem', margin: 0, letterSpacing: '1px' }}>
          Your Personal Task Manager
        </h1>
      </div>

      <div className="form-section" style={{ maxWidth: '400px', margin: '0 auto 32px', background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
        <TaskForm handleTaskUpdate={handleTaskUpdate} />
      </div>

      <ul className="task-list" style={{ maxWidth: '400px', margin: '0 auto', listStyle: 'none', padding: 0 }}>
        {tasks.map((data, index) => (
          <li
            key={index}
            style={{
              background: '#fff',
              marginBottom: '16px',
              padding: '16px 20px',
              borderRadius: '8px',
              boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span style={{ fontWeight: 500, color: '#2d3748' }}>{data.Title}</span>
            <span style={{ background: '#e2e8f0', color: '#4a5568', borderRadius: '6px', padding: '4px 10px', fontSize: '0.95rem' }}>
              {data.Category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
