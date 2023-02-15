/* External dependencies */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/* Internal dependencies */
import Note from '../../Image_Assets/Pfeifer_Note_Black.png'

/** Side navigation bar for view page */
const ViewSidebar = (props) => {
    const location = useLocation();
    
    return (
        <div className='view-sidebar'>
            <Link to='/view/general' style={{ textDecoration: 'none' }} onClick={ props.closeVideoOpen }>
                <p className={ location.pathname === '/view/general' ? "view-sidebar-title view-sidebar-title-selected" : "view-sidebar-title" }>
                    <img src={ Note } className={ location.pathname === '/view/general' ? "sidebar-note sidebar-note-selected" : "sidebar-note" } alt=' '/>
                    general reel
                </p>
            </Link>
            
            <hr className='view-sidebar-line'/>

            <Link to='/view/contemporary' style={{ textDecoration: 'none' }} onClick={ props.closeVideoOpen }>
                <p className={ location.pathname === '/view/contemporary' ? "view-sidebar-text view-sidebar-text-selected view-contemporary" : "view-sidebar-text view-contemporary" }>
                    <img src={ Note } className={ location.pathname === '/view/contemporary' ? "sidebar-note sidebar-note-selected" : "sidebar-note" } alt=' '/>
                    contemporary scores
                </p>
            </Link>
            
            <Link to='/view/humor' style={{ textDecoration: 'none' }} onClick={ props.closeVideoOpen }>
                <p className={ location.pathname === '/view/humor' ? "view-sidebar-text view-sidebar-text-selected view-humor" : "view-sidebar-text view-humor" }>
                    <img src={ Note } className={ location.pathname === '/view/humor' ? "sidebar-note sidebar-note-selected" : "sidebar-note" } alt=' '/>
                    humor
                </p>
            </Link>
            
            <Link to='/view/moods' style={{ textDecoration: 'none' }} onClick={ props.closeVideoOpen }>
                <p className={ location.pathname === '/view/moods' ? "view-sidebar-text view-sidebar-text-selected view-moods" : "view-sidebar-text view-moods" }>
                    <img src={ Note } className={ location.pathname === '/view/moods' ? "sidebar-note sidebar-note-selected" : "sidebar-note" } alt=' '/>
                    moods
                </p>
            </Link>
            
            <Link to='/view/orchestral' style={{ textDecoration: 'none' }} onClick={ props.closeVideoOpen }>
                <p className={ location.pathname === '/view/orchestral' ? "view-sidebar-text view-sidebar-text-selected view-orchestral" : "view-sidebar-text view-orchestral" }>
                    <img src={ Note } className={ location.pathname === '/view/orchestral' ? "sidebar-note sidebar-note-selected" : "sidebar-note" } alt=' '/>
                    orchestral
                </p>
            </Link>
            
            <Link to='/view/spanish' style={{ textDecoration: 'none' }} onClick={ props.closeVideoOpen }>
                <p className={ location.pathname === '/view/spanish' ? "view-sidebar-text view-sidebar-text-selected view-spanish" : "view-sidebar-text view-spanish" }>
                    <img src={ Note } className={ location.pathname === '/view/spanish' ? "sidebar-note sidebar-note-selected" : "sidebar-note" } alt=' '/>
                    spanish market
                </p>
            </Link>
        </div>
    )
}

export default ViewSidebar;