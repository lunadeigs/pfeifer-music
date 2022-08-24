import React from 'react';

const MiniReel = (props) => {
    return(
        <div className="mini-reel" onClick={ () => { 
            props.setCurrentVideoPath(props.videoPath) 
            props.toggleVideoOpen()
        } }>
            <img className="mini-reel-screencap" src={ "./static/screencap_assets/" + props.category + "/" + props.screencapPath } alt={ props.videoName }/>
            <p className="mini-reel-text">{ props.videoName.split("\"")[0]}</p>
            <p className="mini-reel-text">"{ props.videoName.split("\"")[1] }"</p>
            <p className="mini-reel-text">{ props.videoName.split("\"")[2] }</p>
        </div>
    )
}

export default MiniReel;