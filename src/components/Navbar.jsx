/* External dependencies */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

/* Internal dependencies */
import Note from '../Image_Assets/Pfeifer_Note.png';

/** Navigation bar component */
const Navbar = () => {
    const location = useLocation();

    return(
        <div className={ location.pathname === '/' || location.pathname === '/intro' ? 'invisible-navbar' : 'navbar unselectable' }>
            <Link to='/home' style={{ textDecoration: 'none' }} className={ location.pathname.split('/')[1] === 'home' ? "navbar-item navbar-item-selected" : "navbar-item" }>
                <img src={ Note } className={ location.pathname.split('/')[1] === 'home' ? "navbar-note navbar-note-selected" : "navbar-note "} alt=" "/>
                <span className={ location.pathname.split('/')[1] === 'home' ? "navbar-text navbar-text-selected" : "navbar-text" }>home</span>
            </Link>
            
            <Link to='/view' style={{ textDecoration: 'none' }} className={ location.pathname.split('/')[1] === 'view' ? "navbar-item navbar-item-selected" : "navbar-item"}>
                <img src={ Note } className={ location.pathname.split('/')[1] === 'view' ? "navbar-note navbar-note-selected " : "navbar-note"} alt=" "/>
                <span className={ location.pathname.split('/')[1] === 'view' ? "navbar-text navbar-text-selected" : "navbar-text" }>view</span>
            </Link>
            
            <Link to='/listen' style={{ textDecoration: 'none' }} className={ location.pathname.split('/')[1] === 'listen' ? "navbar-item navbar-item-selected" : "navbar-item"}>
                <img src={ Note } className={ location.pathname.split('/')[1] === 'listen' ? "navbar-note navbar-note-selected" : "navbar-note"} alt=" "/>
                <span className={ location.pathname.split('/')[1] === 'listen' ? "navbar-text navbar-text-selected" : "navbar-text" }>listen</span>
            </Link>
        </div>
    )
}

export default Navbar;