import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskList({ tasks, toggleComplete, deleteTask, onEdit }) {
    const navigate = useNavigate();
    const [expandedLogs, setExpandedLogs] = useState({});

    const toggleLogsExpand = (taskId) => {
        setExpandedLogs(prev => ({
            ...prev,
            [taskId]: !prev[taskId]
        }));
    };

    const handleEdit = (task) => {
        onEdit(task);
        navigate('/');
    };

    const getPriorityColor = (priority) => {
        const colors = {
            'Low': 'from-green-500/40 to-emerald-500/40 border-green-400/30',
            'Medium': 'from-yellow-500/40 to-orange-500/40 border-yellow-400/30',
            'High': 'from-red-500/40 to-pink-500/40 border-red-400/30'
        };
        return colors[priority] || colors['Low'];
    };

    const getPriorityIcon = (priority) => {
        const icons = { 'Low': '🟢', 'Medium': '🟡', 'High': '🔴' };
        return icons[priority] || '🟢';
    };

    return (
        <div className="min-h-screen px-4 py-12">
            <div className="max-w-8xl mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl text-white font-bold mb-2 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                        📋 Your Tasks
                    </h2>
                    <p className="text-gray-400">
                        {tasks.length === 0 ? "No tasks yet. Create one to get started!" : `${tasks.filter(t => t.completed).length} of ${tasks.length} completed`}
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {tasks.length === 0 ? (
                        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl p-12 text-center">
                            <p className="text-xl text-gray-400">✨ No tasks yet. Start by creating one!</p>
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`backdrop-blur-2xl bg-white/10 border border-white/40 rounded-2xl p-6 shadow-xl ${task.completed ? 'opacity-70' : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <h3 className={`text-2xl font-bold mb-2 ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                                            {task.completed && '✅ '}{task.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">{task.description}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-4">
                                    <div className={`bg-linear-to-r ${getPriorityColor(task.priority)} border rounded-lg px-3 py-1 text-sm font-medium text-white backdrop-blur-sm`}>
                                        {getPriorityIcon(task.priority)} {task.priority}
                                    </div>

                                    <div className="bg-linear-to-r from-cyan-500/40 to-blue-500/40 border border-cyan-400/30 rounded-lg px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                                        📅 {task.dueDate}
                                    </div>

                                    <div className="bg-white/5 border border-white/20 rounded-lg px-3 py-1 text-sm text-gray-300 backdrop-blur-sm">
                                        Created: {task.createdAt}
                                    </div>
                                </div>

                                <div className="mb-4 text-xs text-gray-400 border-t border-white/10 pt-3">
                                    Last updated: <span className="text-cyan-300">{task.updatedAt}</span>
                                </div>

                                <div className="mb-4 bg-white/5 border border-white/10 rounded-lg p-4">
                                    <button
                                        onClick={() => toggleLogsExpand(task.id)}
                                        className="w-full text-left flex items-center justify-between hover:bg-white/5 rounded transition-all p-2 -mx-2 px-2"
                                    >
                                        <span className="font-semibold text-gray-300 flex items-center gap-2">
                                            📊 Activity Log ({task.logs.length})
                                        </span>
                                        <span className={`text-gray-400 transition-transform ${expandedLogs[task.id] ? 'rotate-180' : ''}`}>
                                            ▼
                                        </span>
                                    </button>

                                    {expandedLogs[task.id] && (
                                        <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
                                            {task.logs.map((log, idx) => (
                                                <div key={idx} className="flex items-start gap-3 text-sm">
                                                    <span className="text-cyan-400 font-medium min-w-fit">{log.timestamp}</span>
                                                    <span className="text-gray-300 capitalize">→ {log.action}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    <button
                                        className={`flex-1 min-w-max px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm ${task.completed
                                            ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-black hover:shadow-lg hover:shadow-emerald-500/50'
                                            : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                                            }`}
                                        onClick={() => toggleComplete(task.id)}
                                    >
                                        {task.completed ? '✓ Completed' : '◯ Mark Complete'}
                                    </button>

                                    <button
                                        className="flex-1 min-w-max px-4 py-2 rounded-lg font-medium bg-linear-to-r from-blue-500 to-cyan-500 text-black  backdrop-blur-sm"
                                        onClick={() => handleEdit(task)}
                                    >
                                        ✏️ Edit
                                    </button>

                                    <button
                                        className="flex-1 min-w-max px-4 py-2 rounded-lg font-medium  border border-red-400 text-white  backdrop-blur-sm"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        🗑️ Delete
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