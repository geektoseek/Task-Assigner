import React from 'react'
import { useState } from 'react';


const TaskForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const submitHandle = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            title: "",
            description: "",
            priority: "Low",
            dueDate: "",
        })

    }

    return (
        <>
            <div className="container   border border-white rounded-lg  py-8 px-4 shadow-sm shadow-amber-50">
                <form className='flex item-center flex-col gap-8 ' onSubmit={handleChange}>
                    <input
                        className='outline-none border border-amber-50 rounded-lg px-4 py-4'
                        type="text"
                        onChange={handleChange}
                        value={formData.title}
                        name='title'
                        placeholder="Task Title" />

                    <select
                        className='outline-none border border-amber-50 rounded-lg px-4 py-4'
                        name='priority'
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <input
                        className='outline-none border border-amber-50 rounded-lg px-4 py-4'
                        name='dueDate'
                        onChange={handleChange}
                        value={formData.dueDate}
                        type="date" />
                    <textarea
                        className='h-52 outline-none border border-amber-50 rounded-lg px-4 py-4'
                        placeholder="Description"
                        onChange={handleChange}
                        value={formData.description}
                        name='description'
                    ></textarea>
                    <button className='bg-amber-600 px-8 py-4 rounded-lg text-black font-medium cursor-pointer text-xl' >Add Task</button>
                </form>
            </div>
        </>
    )
}

export default TaskForm