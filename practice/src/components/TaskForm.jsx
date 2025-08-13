import React, { useState } from 'react'

const TaskForm = ({handleTask}) => {
    const [title,setTitle] = useState("")
    const [category , setCategory] = useState("")

const handleFormSubmit = (task) => {
    task.preventDefault();
    handleTask({
        title: title.trim(),
        category: category.trim()
    });
};
return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
        background: '#f8fafc'
    }}>
        <form
            onSubmit={handleFormSubmit}
            style={{
                background: '#fff',
                padding: '2rem 2.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                minWidth: '320px'
            }}
        >
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Your Task"
                style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border 0.2s',
                }}
            />
            <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Enter Task Category"
                style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border 0.2s',
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: 'linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(59,130,246,0.08)',
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