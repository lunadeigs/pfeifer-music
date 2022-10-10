import React from 'react';
import Note from '../../Image_Assets/Pfeifer_Note_Black.png'

import { Link, useLocation } from 'react-router-dom';

const ListenSidebar = (props) => {
    const location = useLocation();

    const closeAudio = () => {
        if(props.audioOpen){
            props.setAudioOpen(value => !value);
        }
    }

    return (
        <div className='listen-sidebar'>
            <Link to='/listen/montage' style={{ textDecoration: 'none' }}>
                <p className={ location.pathname === '/listen/montage' ? "listen-sidebar-title listen-sidebar-title-selected" : "listen-sidebar-title" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    audio montage
                    <p className={ location.pathname === '/listen/montage' ? "listen-sidebar-subtitle listen-sidebar-subtitle-selected" : "listen-sidebar-subtitle" }>{ "(" }3.5 minute presentation{ ")" }</p>
                </p>
            </Link>
            

            <hr className='listen-sidebar-line' />

            <Link to='/listen/grooves' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/grooves' ? "listen-sidebar-text listen-sidebar-text-selected listen-grooves" : "listen-sidebar-text listen-grooves" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    grooves
                </p>
            </Link>
            
            <Link to='/listen/jazz' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/jazz' ? "listen-sidebar-text listen-sidebar-text-selected listen-jazz" : "listen-sidebar-text listen-jazz" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    jazz/blues
                </p>
            </Link>
            
            <Link to='/listen/orchestral' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/orchestral' ? "listen-sidebar-text listen-sidebar-text-selected listen-orchestral" : "listen-sidebar-text listen-orchestral" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    orchestral
                </p>
            </Link>
            
            <Link to='/listen/ethereal' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/ethereal' ? "listen-sidebar-text listen-sidebar-text-selected listen-ethereal" : "listen-sidebar-text listen-ethereal" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    ethereal/emotional
                </p>
            </Link>
            
            <Link to='/listen/alternative' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/alternative' ? "listen-sidebar-text listen-sidebar-text-selected listen-alternative" : "listen-sidebar-text listen-alternative" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    alternative/classic rock
                </p>
            </Link>
            
            <Link to='/listen/vocals' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/vocals' ? "listen-sidebar-text listen-sidebar-text-selected listen-vocals" : "listen-sidebar-text listen-vocals" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    vocals
                </p>
            </Link>
            
            <Link to='/listen/good' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/good' ? "listen-sidebar-text listen-sidebar-text-selected listen-good" : "listen-sidebar-text listen-good" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    good times/americana
                </p>
            </Link>
            
            <Link to='/listen/quirky' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/quirky' ? "listen-sidebar-text listen-sidebar-text-selected listen-quirky" : "listen-sidebar-text listen-quirky" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    quirky
                </p>
            </Link>
            
            <Link to='/listen/world' style={{ textDecoration: 'none' }} onClick={ closeAudio }>
                <p className={ location.pathname === '/listen/world' ? "listen-sidebar-text listen-sidebar-text-selected listen-world" : "listen-sidebar-text listen-world" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    world
                </p>
            </Link>
            
            <Link to='/listen/childrens' style={{ textDecoration: 'none' }}>
                <p className={ location.pathname === '/listen/childrens' ? "listen-sidebar-text listen-sidebar-text-selected listen-childrens" : "listen-sidebar-text listen-childrens" }>
                    <img src={ Note } className="sidebar-note" alt=' '/>
                    chipmunks montage
                </p>
            </Link>
            
        </div>
    )
}

export default ListenSidebar;