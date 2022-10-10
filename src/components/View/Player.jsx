import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

import Note from '../../Image_Assets/Pfeifer_Note.png'

import Play from '../../Image_Assets/play.svg'

/* <a target="_blank" href="https://icons8.com/icon/407/rewind">Rewind</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
import Rewind from '../../Image_Assets/rewind.svg'
import Pause from '../../Image_Assets/pause.svg'

import assetList from '../../assetList.json';

const Player = (props) => {
    const videoRef = useRef(null);
    const [currentVidPath, setCurrentVidPath] = useState("./static/video_assets/" + props.category + "/" + props.asset.video_path);
    const [currentVidName, setCurrentVidName] = useState(props.asset.name);

    const [playing, setPlaying] = useState(false);

    const rewindTime = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0.05;
        videoRef.current.play();
    }

    const handlePlayPause = () => {
        if(videoRef.current.paused){
            videoRef.current.play();
        }else{
            videoRef.current.pause();
        }
        setPlaying(value => !value);
    }

    return (
        <div className='player' id={ props.category === "general" && props.currentAssetIndex !== 0 ? "extra-player-margin" : null}>
            <p className="back-button" onClick={ props.toggleVideoOpen } >
                back
                <img src={ Note } alt="" className="back-button-note" />
            </p>
            {
                props.category === 'general' && assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName)) !== 8 ?
                    <p className="next-button" onClick={() => {
                        console.log("HI");

                        let currentIndex = assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName));
                        const newItem = assetList.viewAssets.general[currentIndex+1];
                        setCurrentVidPath("./static/video_assets/" + props.category + "/" + newItem.video_path);
                        setCurrentVidName(newItem.name);
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                    }} >
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
                    preload={ true } 
                    autoPlay 
                    src={ currentVidPath }
                    className="video-player" 
                    width="350" 
                    height="262" 
                    onEnded = { () => {
                        if(props.category === 'general' && assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName)) !== 8){
                            let currentIndex = assetList.viewAssets.general.indexOf(assetList.viewAssets.general.find(value => value.name === currentVidName));
                            const newItem = assetList.viewAssets.general[currentIndex+1];
                            setCurrentVidPath("./static/video_assets/" + props.category + "/" + newItem.video_path);
                            setCurrentVidName(newItem.name);
                            videoRef.current.pause();
                            videoRef.current.currentTime = 0;
                            videoRef.current.play();
                        }else{
                            props.toggleVideoOpen()
                        }
                    }}
                    
                />

                <div 
                    className="vid-overlay"
                >
                    <div className='vid-icon-div'>
                        <img src={ Rewind } alt={'rewind'} className='vid-icon' onClick={ rewindTime.bind(this) } />
                    </div>

                    <div className='vid-icon-div'>
                        <img src={ !playing ? Play : Pause } alt={!playing ? 'Play' : 'Pause'} className='vid-icon' onClick={ handlePlayPause.bind(this) } />
                    </div>

                    <div className='vid-icon-div'>
                    </div>
                    
                </div>
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