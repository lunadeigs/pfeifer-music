/* External dependencies */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

/* Internal dependencies */
import Note from '../Image_Assets/Pfeifer_Note.png';

/** Navigation bar component */
const Navbar = () => {
    const location = useLocation();

    return(
        <div className={ location.pathname === '/' || location.pathname === '/intro' ? 'invisible-navbar' : 'navbar' }>
            <Link to='/home' style={{ textDecoration: 'none' }}>
                <h2 className={ location.pathname.split('/')[1] === 'home' ? "navbar-item navbar-item-selected" : "navbar-item" }>
                    <img src={ Note } className={ location.pathname.split('/')[1] === 'home' ? "navbar-note navbar-note-selected " : "navbar-note "} alt=" "/>
                    home
                </h2>
            </Link>
            
            <Link to='/view' style={{ textDecoration: 'none' }}>
                <h2 className={ location.pathname.split('/')[1] === 'view' ? "navbar-item navbar-item-selected" : "navbar-item"}>
                    <img src={ Note } className={ location.pathname.split('/')[1] === 'view' ? "navbar-note navbar-note-selected" : "navbar-note"} alt=" "/>
                    view
                </h2>
            </Link>
            
            <Link to='/listen' style={{ textDecoration: 'none' }}>
                <h2 className={ location.pathname.split('/')[1] === 'listen' ? "navbar-item navbar-item-selected" : "navbar-item"}>
                    <img src={ Note } className={ location.pathname.split('/')[1] === 'listen' ? "navbar-note navbar-note-selected" : "navbar-note"} alt=" "/>
                    listen
                </h2>
            </Link>
            
        </div>
    )
}

export default Navbar;