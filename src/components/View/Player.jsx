/* External dependencies */
import React, { useState, useRef, useEffect } from 'react';

/* Internal Dependencies */
import assetList from '../../assetList.json';
import Note from '../../Image_Assets/Pfeifer_Note.png'
import PlayerControls from './PlayerControls';

/** Handles video controls */
function usePlayerController(videoRef){
    const [videoPaused, setVideoPaused] = useState(videoRef.paused);

    function toggleVideoPaused(){
        setVideoPaused(value => !value);
    }

    function restartVideo(){
        if(!videoRef.current) return

        videoRef.current.pause();
        videoRef.current.currentTime = 0.05;
        videoRef.current.play();
        if(videoPaused) toggleVideoPaused();
    }
    
    function toggleVideoPlaying(){
        if(!videoRef.current) return;
        console.log(videoRef.current.paused)

        if(videoRef.current.paused){
            videoRef.current.play();
            if(videoPaused) toggleVideoPaused();
            return;
        }

        if(!videoPaused) toggleVideoPaused();
        videoRef.current.pause();
    }

    useEffect(() => { 
        function handleSpacePress(e){
            if(e.keyCode === 32){
                e.preventDefault();
                console.log("KEYPRESS");
                console.log(e.keyCode)
    
                toggleVideoPlaying();
            }
        }

        console.log("useSpacebarKeydown run");

        window.addEventListener("keydown", handleSpacePress);
        
        return(() => {
            window.removeEventListener('keydown', handleSpacePress);
        })
    });

    return([restartVideo, toggleVideoPlaying, videoPaused])

   
}

/** Progress bar for video player */
function ProgressBar(props){
    return(
        <div className="progress-bar-filled" style={{
            width: ((props.currentTime/props.videoDuration).toFixed(2)*100) + "%"
        }}></div>
    );
}

/** Video player component */
function Player(props){
    const videoRef = useRef();
    const [currentVidPath, setCurrentVidPath] = useState(process.env.PUBLIC_URL + "/static/video_assets/" + props.category + "/" + props.asset.video_path);
    const [currentVidName, setCurrentVidName] = useState(props.asset.name);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);

    const [restartVideo, toggleVideoPlaying, videoPaused] = usePlayerController(videoRef);

    function onUpdateGrabCurrentTime(){
        setCurrentTime(videoRef.current?.currentTime);
        setVideoDuration(videoRef.current?.duration);
    }

    const VIDEO_STYLE = {
        "backgroundColor": "black"
    }

    return(
        <div className='player'>
            <div className="back-button" onClick={ props.toggleVideoOpen } >
                <img src={ Note } alt="" className="button-note" />
                <span className="button-text">back</span>
            </div>

            <div className="vid-container" >
                <video 
                    onLoadStart={ () => {
                        console.log(videoRef.current);
                        videoRef.current.currentTime = 0.05;
                    }} 
                    ref={ videoRef } 
                    preload="auto" 
                    onTimeUpdate={ onUpdateGrabCurrentTime }
                    autoPlay 
                    src={ currentVidPath }
                    className="video-player" 
                    onEnded = { () => {
                        if(props.category === 'general' && assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName)) !== 8){
                            let currentIndex = assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName));
                            const newItem = assetList.viewAssets.general[currentIndex+1];
                            setCurrentVidPath(process.env.PUBLIC_URL + "/static/video_assets/" + props.category + "/" + newItem.video_path);
                            setCurrentVidName(newItem.name);
                            videoRef.current.pause();
                            videoRef.current.currentTime = 0;
                            videoRef.current.play();
                        }else{
                            props.toggleVideoOpen()
                        }
                    }}
                    onClick={ toggleVideoPlaying }
                    key={ currentVidPath }
                />

                <PlayerControls
                    restartVideo={ restartVideo }
                    toggleVideoPlaying={ toggleVideoPlaying}
                    videoPaused={ videoPaused }
                >
                    <ProgressBar
                        currentTime={ currentTime }
                        videoDuration={ videoDuration }
                    />
                </PlayerControls>
            </div>

            <div className='player-text-container'>
                <p className="player-text">{ currentVidName.split("\"")[0]}</p>
                <p className="player-text">"{ currentVidName.split("\"")[1] }"</p>
                <p className="player-text">{ currentVidName.split("\"")[2] }</p>
            </div>

            {
                props.category === 'general' && assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName)) !== 8 ?
                    <div className="next-button" onClick={ () => {
                        let currentIndex = assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName));
                        const newItem = assetList.viewAssets.general[currentIndex+1];

                        setCurrentVidPath(process.env.PUBLIC_URL + "/static/video_assets/" + props.category + "/" + newItem.video_path);

                        setCurrentVidName(newItem.name);
                        restartVideo();
                    }}>
                        <img src={ Note } alt="" className="button-note" />
                        <span className="button-text">next</span>
                    </div>
                    :
                    null
            } 
        </div>
    );
}

export default Player;