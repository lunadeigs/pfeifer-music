import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Note from '../Image_Assets/Pfeifer_Note.png'

const PreIntroAnimation = (props) => {
    const navigate = useNavigate();

    const [currentClass, setCurrentClass] = useState('pre-intro-text');

    const startIntro = () => {
        setCurrentClass('pre-intro-anim');
        setTimeout(() => {
            navigate("/intro");
        }, [1000])
    }

    return(
        <div className='pre-intro-content'>
            <h2 className={ currentClass } onClick={ startIntro }>
                Enter
                <img className='pre-intro-note' src={ Note } alt=" "/>
            </h2>
            
        </div>
    )
}

export default PreIntroAnimation;