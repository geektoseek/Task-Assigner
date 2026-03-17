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
        <div className="min-h-screen flex items-center justify-center mt-12 w-125 mx-auto">
            <div className="w-full max-w-md border border-white rounded-lg py-8 px-6 shadow-sm shadow-amber-50">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Add New Task</h2>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <input
                        className='outline-none bg-gray-900 border border-amber-50 rounded-lg px-4 py-3 w-full text-white placeholder-gray-400'
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        className='h-36 outline-none bg-gray-900 border border-amber-50 rounded-lg px-4 py-3 w-full text-white placeholder-gray-400 resize-none'
                        name="description"
                        placeholder="Description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <select
                        className='outline-none bg-gray-900 border border-amber-50 rounded-lg px-4 py-3 w-full text-white'
                        name="priority"
                        required
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <input
                        className='outline-none bg-gray-900 border border-amber-50 rounded-lg px-4 py-3 w-full text-white'
                        type="date"
                        required
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                    />
                    <button
                        className='bg-amber-600 px-8 py-3 rounded-lg text-black font-medium cursor-pointer text-lg w-full mt-2'
                        type="submit"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;