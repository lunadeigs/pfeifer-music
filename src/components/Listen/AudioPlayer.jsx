import React, { useState, useEffect, useRef } from 'react';
import { SpectrumVisualizer, SpectrumVisualizerTheme, AudioVisualizerEvents } from 'react-audio-visualizers';

import Note from "../../Image_Assets/Pfeifer_Note.png";
import assetList from '../../assetList.json'
import Pause from '../../Image_Assets/pause.svg';
import Play from '../../Image_Assets/play.svg';
import { render } from '@testing-library/react';

const AudioPlayer = (props) => {
    const audioRef = useRef(null);
    const audioVisRef = useRef(null);
    const mainEventRef = useRef(null);

    const [firstLoad, setFirstLoad] = useState(true);
    const [firstMainAction, setFirstMainAction] = useState(true);
    const [playing, setPlaying] = useState(false);
    
    const [heldPlayFunction, setHeldPlayFunction] = useState({});

    const handlePlayPause = (event, payload) => {
        if(event === "LOADED" && firstLoad){
            console.log("Initial Play");
            setPlaying(value => !value);
            heldPlayFunction.play();
            setFirstLoad(value => !value);
        }else if(playing){
            audioRef.current.pause();
            setPlaying(value => !value);
            console.log("pause");
        }else{
            console.log("Play");
            setPlaying(value => !value);
            audioRef.current.play()
        }
    }

    const mainActionRender = (playPauseObject) => {
        if(firstMainAction){
            setHeldPlayFunction(playPauseObject);
            setFirstMainAction(value => !value);
        }
        
        return {
            id: 'mainActionContainer',
            node: <button onClick={playPauseObject.play}>Play</button>,
        }
    };

    const closePause = () => {
        if(playing){
            setPlaying(value => !value);
            console.log("Close Pause");
            audioRef.current.pause();
            heldPlayFunction.pause();
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
                        <SpectrumVisualizer
                            audio={ "./static/sound_assets/" + props.category + '/' + assetList.listenAssets[props.category].find(value => value.name === props.audioName).file_location }
                            theme={SpectrumVisualizerTheme.radialSquaredBars }
                            colors={['#336699', '#26a69a']}
                            iconsColor={ '#336699' }
                            showMainActionIcon={ true }
                            backgroundColor="rgb(204, 4, 51)"
                            showLoaderIcon
                            volume={ 1 }
                            highFrequency={ 14000 }
                            lowFrequency={ 20 }
                            radius={ 80 }
                            onEvent={ handlePlayPause }
                            mainActionRender={ mainActionRender }
                        />
            }

            {
                assetList.listenAssets[props.category].find(value => value.name === props.audioName) === undefined ?
                    null
                    :
                    <audio 
                        id="audio-player-sound" 
                        ref={ audioRef } 
                        muted
                        src={ 
                            "./static/sound_assets/" + props.category + '/' + assetList.listenAssets[props.category].find(value => value.name === props.audioName).file_location 
                        }
                        autoPlay={ false }
                        onEnded={ props.toggleAudioOpen }
                    />
            }
        </div>
    )
}

export default AudioPlayer;