import { useEffect, useState } from 'react';

import '../../CSS/controls.css';

/** Builds the restartVideo and toggleVideoPlaying functions as well as an active videoPaused value */

/**
 * props.videoRef = reference to html video tag
 * props.children = React.ReactNode
 * @returns 
 */
const PlayerControls = (props) => {

    const pausedHiddenStyle = {
        "top": "50%"
    }

    const buttonColor = "white"

    return(
        <div className="control-row">
            <div className="control-row-hidden" style={ props.videoPaused ? pausedHiddenStyle : undefined }>
                <svg xmlns="http://www.w3.org/2000/svg" className="control-restart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={buttonColor} fill="none" strokeLinecap="round" strokeLinejoin="round"
                    onClick={ props.restartVideo }
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5"></path>
                </svg>
                {
                    !props.videoPaused ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="control-play-pause" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={ buttonColor } fill="none" strokeLinecap="round" strokeLinejoin="round"
                            onClick={ props.toggleVideoPlaying }
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                        <rect x="14" y="5" width="4" height="14" rx="1"></rect>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="control-play-pause" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={buttonColor} fill="none" strokeLinecap="round" strokeLinejoin="round"
                        onClick={ props.toggleVideoPlaying }
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 4v16l13 -8z"></path>
                    </svg>
                }

                <div className='progress-bar'>
                    { props.children }
                </div>
                            
            </div>
        </div>
    )
}

export default PlayerControls