import React, { useState, useRef } from 'react';
import Note from "../../Image_Assets/Pfeifer_Note.png";
import assetList from '../../assetList.json'
import Pause from '../../Image_Assets/pause.svg';
import Play from '../../Image_Assets/play.svg';
import AudioSpectrum from 'react-audio-spectrum';

import { SpectrumVisualizer, SpectrumVisualizerTheme, AudioVisualizerEvents } from 'react-audio-visualizers';

const Montage = (props) => {
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

    return(
        <div className="category-reel">
            <div className="player">
                <p className='audio-title'>{ props.audioName }</p>

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

                <audio 
                    id="audio-player-sound" 
                    ref={ audioRef }
                    src={ 
                        "./static/sound_assets/montage/" + assetList.listenAssets['montage'].file_location 
                    }
                    autoPlay={ true }
                />

                <img onClick={ handlePlayPause } src={ playing ? Pause : Play } className="play_pause" alt={playing ? "pause" : "play"} />

            </div>
        </div>
    )
}

export default Montage;