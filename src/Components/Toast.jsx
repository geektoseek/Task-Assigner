import { useEffect } from 'react'

function Toast({ message, type = 'success' }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            const toastEl = document.querySelector('.toast-notification')
            if (toastEl) {
                toastEl.style.opacity = '0'
                toastEl.style.transform = 'translateY(20px)'
            }
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const config = {
        success: {
            bg: 'from-emerald-500/15 to-teal-500/15',
            border: 'border-emerald-400/30',
            icon: '✨'
        },
        delete: {
            bg: 'from-red-500/15 to-orange-500/15',
            border: 'border-red-400/30',
            icon: '🗑️'
        },
        error: {
            bg: 'from-pink-500/15 to-rose-500/15',
            border: 'border-pink-400/30',
            icon: '⚠️'
        }
    }[type]

    return (
        <div
            className="toast-notification fixed bottom-8 right-8 z-50 transition-all duration-500"
            style={{
                opacity: 1,
                transform: 'translateY(0)',
            }}
        >
            <div className={`
        bg-linear-to-r ${config.bg}
        backdrop-blur-xl
        border ${config.border}
        rounded-xl
        px-6 py-3
        flex items-center gap-3
        min-w-max
      `}>
                {/* <span className="text-2xl">{config.icon}</span> */}
                <p className="text-white text-sm font-medium">{message}</p>
            </div>
        </div>
    )
}

export default Toast