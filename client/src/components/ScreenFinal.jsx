import React from 'react'

function ScreenFinal() {
    return (
        <div className="p-3">
            <p className="text-xl">You seem to have a sleep efficiency of {Math.floor(Math.random() * (100 - 85 + 1)) + 85}%</p>
            <p className="text-xl">That's good :)</p><br />
            <p className="text-xl">A higher sleep efficiency score means a more refreshing and energizing sleep, which can help you move into your day with a sense of lightness and ease.</p>
        </div>
    )
}

export default ScreenFinal