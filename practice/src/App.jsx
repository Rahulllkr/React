import React,{useState} from 'react'
import TaskForm from './components/TaskForm'

import './App.css'

function App() {

  const [task,setTask] = useState([])

  const handleTask = (taskData) => {
    const newTask = {
      title : taskData.title,
      category : taskData.category
  }
    setTask(
      [...task,newTask]
    )
  }

  return (
    <div className="app-container" style={{ maxWidth: 500, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <h1 style={{ textAlign: "center", color: "#2d3748", marginBottom: 32 }}>Your Personal Task Manager</h1>
      <TaskForm handleTask={handleTask} />
      <ul style={{ listStyle: "none", padding: 0, marginTop: 32 }}>
        {task.map((data, index) => (
          <li
            key={index}
            style={{
              background: "#f7fafc",
              marginBottom: 16,
              padding: "16px 20px",
              borderRadius: 8,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span style={{ fontWeight: 500, color: "#2b6cb0" }}>{data.title}</span>
            <span style={{ background: "#bee3f8", color: "#2c5282", padding: "4px 12px", borderRadius: 6, fontSize: 14 }}>
              {data.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
