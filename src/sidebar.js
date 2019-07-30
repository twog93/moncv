// sidebar.js
import React from 'react';
//Import react Menu
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";

export default props => {
    return (
        <Menu>
            <Link className="menu-item" to="/start">Accueil</Link>
            <a className="menu-item" href="/cv">
                Curriculum Vitae
            </a>
            <a className="menu-item" href="/Contact">
                Contact
            </a>
        </Menu>
    );
};
// export default props => {
//     return (
//         <Menu>
//             <Link className="menu-item" to="/start">Accueil</Link>
//             <Link className="menu-item" to="/cv">Curriculum Vitae</Link>
//             <Link className="menu-item" to="/contact">Contact</Link>
//         </Menu>
//     );
// };
