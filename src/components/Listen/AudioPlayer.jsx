import React, { useState, useRef } from 'react';
import AudioSpectrum from 'react-audio-spectrum';

import Note from "../../Image_Assets/Pfeifer_Note.png";
import assetList from '../../assetList.json'
import Pause from '../../Image_Assets/pause.svg';
import Play from '../../Image_Assets/play.svg';
import { render } from '@testing-library/react';

const AudioPlayer = (props) => {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const handlePlayPause = (event, payload) => {
        if(playing){
            audioRef.current.pause();
          }else{
            audioRef.current.play();
          }
          setPlaying(value => !value);
    }

    const closePause = () => {
        if(playing){
            setPlaying(value => !value);
            console.log("Close Pause");
            audioRef.current.pause();
        }
    }

    const buttonColor = "black"

    const svgStyle = {
        height: "40px",
        width: "40px"
    }

    return(
        <div className="player">
            <p className="back-button" onClick={ () => {
                closePause()
                props.toggleAudioOpen()
            }}>
                back
                <img src={ Note } alt="" className="back-button-note" />
            </p>

            <p className='audio-title'>{ props.audioName }</p>
            {
                assetList.listenAssets[props.category].find(value => value.name === props.audioName) === undefined ?
                    null
                    :
                    <AudioSpectrum
                        id="audio-canvas"
                        height={200}
                        width={320}
                        audioId={'audio-player-sound'}
                        capColor={'#b7001e'}
                        capHeight={2}
                        meterWidth={32}
                        meterCount={11}
                        meterColor={[
                        {stop: 0, color: '#ff0000'},
                        {stop: 0.2, color: '#FFFF00'}, // 
                        {stop: 0.6, color: '#00cb00'} // 008000
                        ]}
                        gap={4}
                    />
            }

            {
                assetList.listenAssets[props.category].find(value => value.name === props.audioName) === undefined ?
                    null
                    :
                    <audio 
                        id="audio-player-sound" 
                        ref={ audioRef }
                        src={ 
                            process.env.PUBLIC_URL + "/static/sound_assets/" + props.category + '/' + assetList.listenAssets[props.category].find(value => value.name === props.audioName).file_location 
                        }
                        autoPlay={ true }
                        onEnded={ props.toggleAudioOpen }
                    />
            }

            <div onClick={ handlePlayPause } className="play_pause" alt={playing ? "pause" : "play"} >
                {
                    playing ?
                        <svg xmlns="http://www.w3.org/2000/svg" style={ svgStyle } width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={ buttonColor } fill="none" strokeLinecap="round" strokeLinejoin="round"
                            onClick={ props.toggleVideoPlaying }
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                        <rect x="14" y="5" width="4" height="14" rx="1"></rect>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" style={ svgStyle } width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={buttonColor} fill="none" strokeLinecap="round" strokeLinejoin="round"
                        onClick={ props.toggleVideoPlaying }
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 4v16l13 -8z"></path>
                    </svg>
                }

            </div>
            
            {/* <img onClick={ handlePlayPause } src={ playing ? Pause : Play } className="play_pause" alt={playing ? "pause" : "play"} /> */}
        </div>
    )
}

export default AudioPlayer;