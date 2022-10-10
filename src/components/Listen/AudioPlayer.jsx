import React, { useState, useEffect, useRef } from 'react';
import { SpectrumVisualizer, SpectrumVisualizerTheme, AudioVisualizerEvents } from 'react-audio-visualizers';
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
                        capColor={'blue'}
                        capHeight={2}
                        meterWidth={32}
                        meterCount={11}
                        meterColor={[
                        {stop: 0, color: '#f00'},
                        {stop: 0.5, color: '#0CD7FD'},
                        {stop: 1, color: 'red'}
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
                            "./static/sound_assets/" + props.category + '/' + assetList.listenAssets[props.category].find(value => value.name === props.audioName).file_location 
                        }
                        autoPlay={ true }
                        onEnded={ props.toggleAudioOpen }
                    />
            }

            <img onClick={ handlePlayPause } src={ playing ? Pause : Play } className="play_pause" alt={playing ? "pause" : "play"} />
        </div>
    )
}

export default AudioPlayer;