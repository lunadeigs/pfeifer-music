/* External dependencies */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Internal dependencies */
import Note from '../Image_Assets/Pfeifer_Note.png';

/** Component to facilitate introduction to site */
const IntroAnimation = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.playMusic();
        setTimeout(() => {
            navigate('/home');
        }, 6000)
    })

    return (
        <div className="intro-animation">
            <div className='navbar'>
                <h2 className="navbar-item navbar-item-selected intro-navbar-item intro-navbar-home">
                    <img src={ Note } className="navbar-note navbar-note-selected" alt=" "/>
                    home
                </h2>

                <h2 className="navbar-item intro-navbar-item intro-navbar-view">
                    <img src={ Note } className="navbar-note" alt=" "/>
                    view
                </h2>

                <h2 className="navbar-item intro-navbar-item intro-navbar-listen">
                    <img src={ Note } className="navbar-note" alt=" "/>
                    listen
                </h2>
            </div>
            <div className='intro-main-content'>
                <div className='expanding-sidebar'>
                    <div className='contact-block intro-contact-block'>
                        <div className='contact-info'>
                            <p className='contact-red'>contact:</p>
                            <p>howard pfeifer</p>
                            <p>312.467.7027</p>
                            <p className='contact-blue'>howard@pfeifermusic.com</p>
                        </div>

                        <br />

                        <div className='contact-info'>
                            <p>5974 n leader av</p>
                            <p>chicago, il 60646</p>
                        </div>
                    </div>   
                </div>
                <div className='intro-title-area'>
                    <hr className='top-intro-line intro-line' />
                    <div className='intro-title'>
                        <img className='title-note intro-title-note' src={ Note } alt=" "/>
                        
                        <h1 className='title' >
                            <span className='intro-letter intro-p'>p</span>
                            <span className='intro-letter intro-f-1'>f</span>
                            <span className='intro-letter intro-e-1'>e</span>
                            <span className='intro-letter intro-i'>i</span>
                            <span className='intro-letter intro-f-2'>f</span>
                            <span className='intro-letter intro-e-2'>e</span>
                            <span className='intro-letter intro-r'>r</span>
                            </h1>

                        <p className='music-partners music-partners-intro'>music partners</p>
                    </div>
                    

                    {/* <hr className='bottom-intro-line intro-line' /> */}
                </div>
            </div>
        </div>
    )
}

export default IntroAnimation;