/* External dependencies */
import React from 'react';

/* Internal dependencies */
import '../../CSS/controls.css';

/** Controls for the player component */
const PlayerControls = (props) => {
    const PAUSE_HIDDEN_STYLE = {
        "top": "0"
    }

    const BUTTON_COLOR = "white"

    return(
        <div className="control-row">
            <div className="control-row-hidden" style={ props.videoPaused ? PAUSE_HIDDEN_STYLE : undefined }>
                <div className="control-row-icons">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"

                        // width="24" 
                        // height="24"
                        stroke={ BUTTON_COLOR }
                        className="control-restart" 
                        onClick={ props.restartVideo }
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5"></path>
                    </svg>
                    {
                        !props.videoPaused ?
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"  
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                width="24" 
                                height="24"

                                className="control-play-pause" 
                                stroke={ BUTTON_COLOR }
                                onClick={ props.toggleVideoPlaying }
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                            <rect x="14" y="5" width="4" height="14" rx="1"></rect>
                        </svg>
                        :
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" 
                            strokeWidth="2" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            width="24" 
                            height="24"

                            className="control-play-pause" 
                            stroke={ BUTTON_COLOR } 
                            onClick={ props.toggleVideoPlaying }
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 4v16l13 -8z"></path>
                        </svg>
                    }
                </div>

                <div className='progress-bar'>
                    { props.children }
                </div>
                            
            </div>
        </div>
    )
}

export default PlayerControls