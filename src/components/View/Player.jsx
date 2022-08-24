import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

import Note from '../../Image_Assets/Pfeifer_Note.png'

const Player = (props) => {
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if(videoRef.current.paused){
            videoRef.current.play();
        }else{
            videoRef.current.pause();
        }
    }

    return (
        <div className='player' id={ props.category === "general" && props.currentAssetIndex !== 0 ? "extra-player-margin" : null}>
            <p className="back-button" onClick={ props.toggleVideoOpen } >
                back
                <img src={ Note } alt="" className="back-button-note" />
            </p>
            <video onLoadStart={ () => {
                console.log(videoRef.current);
                videoRef.current.currentTime = 0.05;
            }} ref={ videoRef } preload={ true } autoPlay src={ "./static/video_assets/" + props.category + "/" + props.asset.video_path } className="video-player" width="350" height="262" onEnded = { () => {
                props.toggleVideoOpen()
            }} onClick={handlePlayPause.bind(this)}/>
            <div className='player-text-container'>
                <p className="player-text">{ props.asset.name.split("\"")[0]}</p>
                <p className="player-text">"{ props.asset.name.split("\"")[1] }"</p>
                <p className="player-text">{ props.asset.name.split("\"")[2] }</p>
            </div>
        </div>
    );
}

export default Player;