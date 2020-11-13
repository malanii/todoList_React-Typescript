import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
return (
    <nav>
        <div className="nav-wrapper #ce93d8 purple lighten-3 px1">
            <a href="/" className="brand-logo">React/TypeScript ToDo List</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">Список дел</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>

            </ul>
        </div>
    </nav>
)
};
// export default Navbar;