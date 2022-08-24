import React, { useState, useRef } from 'react';
import Note from "../../Image_Assets/Pfeifer_Note.png";
import assetList from '../../assetList.json'
import Pause from '../../Image_Assets/pause.svg';
import Play from '../../Image_Assets/play.svg';

import { SpectrumVisualizer, SpectrumVisualizerTheme, AudioVisualizerEvents } from 'react-audio-visualizers';

const Montage = (props) => {
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

    return(
        <div className="category-reel">
            <div className="player">
                <p className='audio-title'>{ props.audioName }</p>

                <SpectrumVisualizer
                    audio={ 
                        "./static/sound_assets/montage/" + assetList.listenAssets['montage'].file_location 
                    }
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

                <audio 
                    id="audio-player-sound" 
                    ref={ audioRef } 
                    muted
                    src={ 
                        "./static/sound_assets/montage/" + assetList.listenAssets['montage'].file_location 
                    }
                    autoPlay={ false }
                />

            </div>
        </div>
    )
}

export default Montage;