function TaskList({ tasks, toggleComplete, deleteTask }) {
    return (
        <div className="container bg-gray-700 rounded-lg border border-gray-400 py-8 pl-6 overflow-y-auto">
            <div className="sub-row h-156 pr-3 overflow-auto space-y-4">
                {tasks.map((task) => (
                    <div key={task.id} className="data bg-gray-900 rounded-lg p-4">
                        <h4 className="title">{task.title}</h4>
                        <div className="h5">{task.dueDate}</div>
                        <h3>{task.priority}</h3>
                        <p>{task.description}</p>
                        <div className="flex gap-2 mt-2">
                            <button className={`px-3 py-1 rounded ${task.completed ? "bg-green-500" : "bg-gray-500"}`}
                                onClick={() => toggleComplete(task.id)}>
                                {task.completed ? "Completed" : "Mark Complete"}
                            </button>
                            <button className="px-3 py-1 bg-red-600 rounded" onClick={() => deleteTask(task.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskList;