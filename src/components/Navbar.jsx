import React, { useState } from 'react';
import { Route, useLocation, Link, Routes } from 'react-router-dom';
import Note from '../Image_Assets/Pfeifer_Note.png';

const Navbar = (props) => {
    const location = useLocation();
    const [homeClick, setHomeClick] = useState(false);
    const [viewClick, setViewClick] = useState(false);
    const [listenClick, setListenClick] = useState(false);

    return(
        <div className={ location.pathname === '/' || location.pathname === '/intro' ? 'invisible-navbar' : 'navbar' }>
            <Link to='/home' style={{ textDecoration: 'none' }} onClick={ () => { setHomeClick(true) }}>
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