import React from "react";
import {Link} from "react-router-dom";
const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link id="nav-menu__home" to="/">Esileht</Link>
            </li>
            <li>
                <Link id="nav-menu__workorders" to="/workorders">Töökäsud</Link>
            </li>
            <li>
                <Link id="nav-menu__add-workorder" to="/add-workorder">Lisa töökäsk</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar