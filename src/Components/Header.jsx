import { Link } from 'react-router-dom'

function Header({ hasTasks, isFormPage }) {
    return (
        <header className='flex items-center justify-between px-12 py-6 border-b border-white'>
            <Link to="/" className='text-xl font-bold'>Task Manager</Link>

            <div className='flex gap-4'>
                {isFormPage ? (
                    <button disabled className='bg-amber-600 px-6 py-2 rounded-lg text-black font-medium opacity-40 cursor-not-allowed'>
                        Add New Task
                    </button>
                ) : (
                    <Link to="/" className='bg-amber-600 px-6 py-2 rounded-lg text-black font-medium'>
                        Add New Task
                    </Link>
                )}

                {hasTasks ? (
                    <Link to="/tasks" className='bg-amber-600 px-6 py-2 rounded-lg text-black font-medium'>
                        View Tasks
                    </Link>
                ) : (
                    <button disabled className='bg-amber-600 px-6 py-2 rounded-lg text-black font-medium opacity-40 cursor-not-allowed'>
                        View Tasks
                    </button>
                )}
            </div>
        </header>
    )
}

export default Header