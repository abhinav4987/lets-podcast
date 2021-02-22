import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [click, setClick] = useState(faslse);
    const handleClick = () => setClick(!cick);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Let's Blog<i className="fab fa-typeo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
<nav>