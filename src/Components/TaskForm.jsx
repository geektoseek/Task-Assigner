import { useState } from "react";

function TaskForm({ addTask }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Low",
        dueDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(formData);
        setFormData({
            title: "",
            description: "",
            priority: "Low",
            dueDate: ""
        });
    };

    return (
        <div className="container border border-white rounded-lg py-8 px-4 shadow-sm shadow-amber-50">
            <form className='flex items-center flex-col gap-8' onSubmit={handleSubmit}>
                <input
                    className='outline-none border border-amber-50 rounded-lg px-4 py-4 w-full'
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <textarea
                    className='h-52 outline-none border border-amber-50 rounded-lg px-4 py-4 w-full'
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <select
                    className='outline-none border border-amber-50 rounded-lg px-4 py-4 w-full'
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <input
                    className='outline-none border border-amber-50 rounded-lg px-4 py-4 w-full'
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                />
                <button
                    className='bg-amber-600 px-8 py-4 rounded-lg text-black font-medium cursor-pointer text-xl w-full'
                    type="submit"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default TaskForm;