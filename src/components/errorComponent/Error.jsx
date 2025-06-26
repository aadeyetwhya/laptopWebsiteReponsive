import React from 'react'

function Error({ errorMsg = "Sorry unable to load" }) {
    return (
        <div className="flex items-center text-red-600 text-sm mt-1">
            <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M12 5a7 7 0 110 14a7 7 0 010-14z"
                />
            </svg>
            <span>{errorMsg}</span>
        </div>

    )
}

export default Error