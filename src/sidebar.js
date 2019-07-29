// sidebar.js
import React from 'react';
//Import react Menu
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Accueil
            </a>
            <a className="menu-item" href="/Cv">
                Curriculum Vitae
            </a>
            <a className="menu-item" href="/Contact">
                Contact
            </a>
        </Menu>
    );
};
