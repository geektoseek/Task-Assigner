import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm({ addTask, editingTask, onUpdate }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "Low",
        dueDate: ""
    });

    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority,
                dueDate: editingTask.dueDate
            });
        }
    }, [editingTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingTask) {
            onUpdate(editingTask.id, formData);
            navigate("/tasks");
        } else {
            addTask(formData);
        }
        setFormData({
            title: "",
            description: "",
            priority: "Low",
            dueDate: ""
        });
    };

    const handleCancel = () => {
        setFormData({
            title: "",
            description: "",
            priority: "Low",
            dueDate: ""
        });
        navigate("/tasks");
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-2 py-12">
            <div className="w-full max-w-4xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-center mb-2 bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {editingTask ? "Edit Task" : "Create Task"}
                </h2>
                <p className="text-center text-gray-400 text-sm mb-6">
                    {editingTask ? "Update your task details" : "Add a new task to your list"}
                </p>

                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Task Title *</label>
                        <input
                            className='w-full outline-none bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm'
                            type="text"
                            name="title"
                            placeholder="What do you want to accomplish?"
                            value={formData.title}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Description *</label>
                        <textarea
                            className='w-full h-32 outline-none bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 resize-none backdrop-blur-sm'
                            name="description"
                            placeholder="Add details about your task..."
                            required
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Priority Level *</label>
                        <select
                            className='w-full outline-none bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer'
                            name="priority"
                            required
                            value={formData.priority}
                            onChange={handleChange}
                        >
                            <option value="Low" className="bg-gray-900">🟢 Low</option>
                            <option value="Medium" className="bg-gray-900">🟡 Medium</option>
                            <option value="High" className="bg-gray-900">🔴 High</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Due Date *</label>
                        <input
                            className='w-full outline-none bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm'
                            type="date"
                            required
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            className='flex-1 bg-linear-to-r from-cyan-500 to-blue-500 text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm'
                            type="submit"
                        >
                            {editingTask ? "💾 Update Task" : "✨ Add Task"}
                        </button>
                        {editingTask && (
                            <button
                                className='flex-1 bg-white/10 border border-white/20 text-white font-bold py-3 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm'
                                type="button"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;