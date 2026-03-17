function TaskList({ tasks, toggleComplete, deleteTask }) {
    return (
        <div className="min-h-screen flex items-center justify-center w-200 mt-6 mx-auto">
            <div className="w-full max-w-xl bg-gray-800 border border-gray-600 rounded-lg p-6  mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Task List</h2>
                <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto overflow-x-hidden pr-2">
                    {tasks.length === 0 ? (
                        <p className="text-center text-gray-400">No tasks yet!</p>
                    ) : (
                        tasks.map((task) => (
                            <div key={task.id} className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                                <h4 className="text-white font-semibold text-lg">{task.title}</h4>
                                <p className="text-gray-400 text-sm mt-1">{task.description}</p>
                                <div className="flex gap-4 mt-2 text-sm">
                                    <span className="text-amber-400">Priority: {task.priority}</span>
                                    <span className="text-gray-400">Due: {task.dueDate}</span>
                                </div>
                                <div className="flex gap-2 mt-3">
                                    <button
                                        className={`px-3 py-1 rounded text-sm font-medium ${task.completed ? "bg-green-500 text-black" : "bg-gray-600 text-white"}`}
                                        onClick={() => toggleComplete(task.id)}
                                    >
                                        {task.completed ? "Completed" : "Mark Complete"}
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-red-600 text-white rounded text-sm font-medium"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default TaskList;