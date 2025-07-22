import React, { useState } from 'react'

const TaskForm = ({handleTaskUpdate}) => {
    const [title,setTitle] = useState("")
    const [category,setCategory] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); 

        handleTaskUpdate({
            title : title.trim(),
            category : category.trim()
        })
    }
return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '2rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                background: '#f9f9f9',
                minWidth: '320px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
        >
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Add Task"
                style={{
                    padding: '0.5rem',
                    borderRadius: '4px',
                    border: '1px solid #bbb',
                    fontSize: '1rem'
                }}
            />
            <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Task Category"
                style={{
                    padding: '0.5rem',
                    borderRadius: '4px',
                    border: '1px solid #bbb',
                    fontSize: '1rem'
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '0.6rem',
                    borderRadius: '4px',
                    border: 'none',
                    background: '#1976d2',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                }}
            >
                Add Task
            </button>
        </form>
    </div>
)
}

export default TaskForm