import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Button.css'
function Button() {
    return (
        <div>
            <Link >
                <button className="btn">Give Feedback</button>
            </Link>
        </div>
    )
}

export default Button;
