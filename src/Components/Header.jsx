import { Link } from 'react-router-dom'

function Header({ hasTasks, isFormPage }) {
    return (
        <header className='fixed w-full z-20 backdrop-blur-xl bg-white/5 border-b border-white/10 px-8 py-2 shadow-2xl'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <Link to="/" className='text-3xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity'>
                    ✓ TaskPro
                </Link>

                <nav className='flex gap-4'>
                    {isFormPage ? (
                        <button disabled className='px-6 py-2 rounded-lg font-medium bg-linear-to-r from-cyan-500/40 to-blue-500/40 border border-cyan-400/30 text-white opacity-40 cursor-not-allowed backdrop-blur-xl transition-all'>
                            + Add Task
                        </button>
                    ) : (
                        <Link to="/" className='px-6 py-2 rounded-lg font-medium bg-linear-to-r from-cyan-500 to-blue-500 text-black hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-xl'>
                            + Add Task
                        </Link>
                    )}

                    {hasTasks ? (
                        <Link to="/tasks" className='px-6 py-2 rounded-lg font-medium bg-linear-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-xl'>
                            📋 View Tasks
                        </Link>
                    ) : (
                        <button disabled className='px-6 py-2 rounded-lg font-medium bg-linear-to-r from-purple-500/40 to-pink-500/40 border border-purple-400/30 text-white opacity-40 cursor-not-allowed backdrop-blur-xl transition-all'>
                            📋 View Tasks
                        </button>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header