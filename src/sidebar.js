// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/Contact.js">
                Contact
            </a>
            <a className="menu-item" href="/node">
                Node
            </a>
        </Menu>
    );
};
