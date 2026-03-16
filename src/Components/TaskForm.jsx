import React from 'react'

const TaskForm = () => {
    return (
        <>
            <div className="container   border border-white rounded-lg  py-8 px-4 shadow-sm shadow-amber-50">
                <form className='flex item-center flex-col gap-8 '>
                    <input className='outline-none border border-amber-50 rounded-lg px-4 py-4' type="text" placeholder="Task Title" />
                    <select className='outline-none border border-amber-50 rounded-lg px-4 py-4'>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <input className='outline-none border border-amber-50 rounded-lg px-4 py-4' type="date" />
                    <textarea className='h-52 outline-none border border-amber-50 rounded-lg px-4 py-4' placeholder="Description"></textarea>
                    <button className='bg-amber-600 px-8 py-4 rounded-lg text-black font-medium cursor-pointer text-xl' >Add Task</button>
                </form>
            </div>
        </>
    )
}

export default TaskForm