/* External Dependencies */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Internal Dependencies */
import Note from '../Image_Assets/Pfeifer_Note.png'

/** Landing page before the introductory animation for the site is triggered */
const PreIntroAnimation = () => {
    const navigate = useNavigate();

    const [enterClicked, setEnterClicked] = useState(false);

    const startIntro = () => {
        if(!enterClicked){
            setEnterClicked(value => !value);

            setTimeout(() => {
                navigate("/intro");
            }, [1000])
        }
    }

    return(
        <div className='pre-intro-container'>
            <div className='pre-intro-content'>
                <div className={`back-button audio-back-button ${enterClicked ? 'start-intro-animation' : ''}`}onClick={startIntro}>
                    <img src={ Note } alt="" className="button-note pre-intro-note" />
                    <span className="button-text pre-intro-text">Enter</span>
                </div>
            </div>
        </div>
        
    )
}

export default PreIntroAnimation;