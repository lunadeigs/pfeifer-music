/* External Dependencies */
import React from 'react';
import { useLocation } from 'react-router-dom';

/** Footer component used by all pages */
const Footer = () => {
    const location = useLocation();

    return (
        <div className={ location.pathname === '/' || location.pathname === '/intro' ? 'invisible-navbar' : 'footer' }>
        {
            location.pathname !== '/home' ?
                <img 
                    src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Footer_Logo.png'}
                    alt={"Pfeifer Music Logo"}
                    className="footer-logo"
                />
                :
                null
        }
        </div>
    )
}

export default Footer;