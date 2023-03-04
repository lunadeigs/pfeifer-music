/* External dependencies */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Internal dependencies */
import Note from '../Image_Assets/Pfeifer_Note.png';


/* Intro Title Classes */
// const LETTER_R = {
//     backgroundImage: "url(process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png')"
// }

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
            <div className='navbar unselectable'>
                <span style={{ textDecoration: 'none' }} className="navbar-item navbar-item-selected intro-home">
                    <img src={ Note } className="navbar-note navbar-note-selected" alt=" "/>
                    <span className="navbar-text navbar-text-selected">home</span>
                </span>
                
                <span style={{ textDecoration: 'none' }} className="navbar-item intro-view">
                    <img src={ Note } className="navbar-note" alt=" "/>
                    <span className="navbar-text">view</span>
                </span>
                
                <span style={{ textDecoration: 'none' }} className="navbar-item intro-listen">
                    <img src={ Note } className="navbar-note" alt=" "/>
                    <span className="navbar-text">listen</span>
                </span>
            </div>

            <div className='page-wrapper intro-page-wrapper'>
                <span className='navbar-line' />
                <div className="intro-sidebar page-sidebar unselectable">
                    <div className="intro-contact contact-info">
                        <p className="red-text">contact:</p>
                        <p>howard pfeifer</p>
                        <p>312.467.7027</p>
                        <p className="blue-text">howard@pfeifermusic.com</p>
                    </div>
                    <br />
                    <div className="intro-contact contact-info unselectable">
                        <p>5974 n leader av</p>
                        <p>chicago, il 60646</p>
                    </div>
                </div>
                <div className="page-content home-page-content">
                    <div className="intro-logo-container">
                        <img 
                            className="intro-letter intro-letter-p" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                        <img
                            className="intro-letter intro-letter-f1" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                        <img
                            className="intro-letter intro-letter-e1" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                        <img
                            className="intro-letter intro-letter-i" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                        <img 
                            className="intro-letter intro-letter-note" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo_Only_Note.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                        <img
                            className="intro-letter intro-letter-f2" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                        <img 
                            className="intro-letter intro-letter-e2" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                        <img 
                            className="intro-letter intro-letter-r" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                        <img 
                            className="intro-letter intro-music-partners" 
                            src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                            alt={"Pfeifer Music Logo"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroAnimation;