import React from 'react';
import { useLocation } from 'react-router-dom';

import Note from '../Image_Assets/Pfeifer_Note.png';

const Footer = () => {
    const location = useLocation();

    return (
        <div className={ location.pathname === '/' || location.pathname === '/intro' ? 'invisible-navbar' : 'footer' }>
        {
            location.pathname !== '/home' ?
                <div className='footer-content'>
                    <img className='footer-note' src={ Note } alt=" "/>
                    <h1 className='pfeifer-footer' >pfeifer</h1>
                    <p className='music-partners-footer'>music partners</p>
                </div>
                :
                null
        }
        </div>
    )
}

export default Footer;