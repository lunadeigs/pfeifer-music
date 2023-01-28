import React, { useState, useRef } from 'react';

import Note from '../../Image_Assets/Pfeifer_Note.png'

//import Play from '../../Image_Assets/play.svg'

/* <a target="_blank" href="https://icons8.com/icon/407/rewind">Rewind</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
import Rewind from '../../Image_Assets/rewind.svg'
import Pause from '../../Image_Assets/pause.svg'

import assetList from '../../assetList.json';
import PlayerControls from './PlayerControls';
import { useEffect } from 'react';

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
/**
 * 
 * @returns Progress Bar
 */
function useProgressBar(currentTime, videoDuration){
    const [videoPercentage, setVideoPercentage] = useState(0);

    useEffect(() => {
        let ignore = false;

        if(!ignore){
            setVideoPercentage((currentTime/videoDuration).toFixed(2)*100);
        }

        return(() => {
            ignore = true;
        })

    }, [currentTime, videoDuration])

    return(
        <div className="progress-bar-filled" style={{
            width: videoPercentage + "%"
        }}></div>
    );
}

const Player = (props) => {
    const videoRef = useRef();
    const [currentVidPath, setCurrentVidPath] = useState(process.env.PUBLIC_URL + "/static/video_assets/" + props.category + "/" + props.asset.video_path);
    const [currentVidName, setCurrentVidName] = useState(props.asset.name);
    

    const [playing, setPlaying] = useState(false);

    const [currentTime, setCurrentTime] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);

    const barComponent = useProgressBar(currentTime, videoDuration);

    function onUpdateGrabCurrentTime(){
        setCurrentTime(videoRef.current?.currentTime);
        setVideoDuration(videoRef.current?.duration);
    }

    const vidStyle = {
        "backgroundColor": "black"
    }

    const [restartVideo, toggleVideoPlaying, videoPaused] = usePlayerController(videoRef);

    return(
        <div className='player' id={ props.category === "general" && props.currentAssetIndex !== 0 ? "extra-player-margin" : null}>
            <p className="back-button" onClick={ props.toggleVideoOpen } >
                back
                <img src={ Note } alt="" className="back-button-note" />
            </p>
            {
                props.category === 'general' && assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName)) !== 8 ?
                    <p className="next-button" onClick={() => {
                        let currentIndex = assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName));
                        const newItem = assetList.viewAssets.general[currentIndex+1];
                        setCurrentVidPath(process.env.PUBLIC_URL + "/static/video_assets/" + props.category + "/" + newItem.video_path);
                        setCurrentVidName(newItem.name);
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                    }}>
                        next
                        <img src={ Note } alt="" className="back-button-note" />
                    </p>
                    :
                    null
            }

            <div className="vid-container">
                <video 
                    onLoadStart={ () => {
                        console.log(videoRef.current);
                        videoRef.current.currentTime = 0.05;
                        setPlaying(true)
                    }} 
                    ref={ videoRef } 
                    preload="auto" 
                    onTimeUpdate={ onUpdateGrabCurrentTime }
                    autoPlay 
                    src={ currentVidPath }
                    className="video-player" 
                    width="350" 
                    height="262" 
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
                    style={ vidStyle }
                    onClick={ toggleVideoPlaying }
                    
                />

                <PlayerControls
                    restartVideo={ restartVideo }
                    toggleVideoPlaying={ toggleVideoPlaying}
                    videoPaused={ videoPaused }
                >
                    { barComponent }
                </PlayerControls>
            </div>

            <div className='player-text-container'>
                <p className="player-text">{ currentVidName.split("\"")[0]}</p>
                <p className="player-text">"{ currentVidName.split("\"")[1] }"</p>
                <p className="player-text">{ currentVidName.split("\"")[2] }</p>
            </div>
        </div>
    );
}

export default Player;