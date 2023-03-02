/* External dependencies */
import React, { useState, useRef } from 'react';
import AudioSpectrum from 'react-audio-spectrum';

/* Internal dependencies */
import assetList from '../../assetList.json'
import AudioPlayer from './AudioPlayer';

/** Handles the montage subpage of the listen page */
function Montage(props){
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    function handlePlayPause(){
        if(playing){
            audioRef.current.pause();
          }else{
            audioRef.current.play();
          }
          setPlaying(value => !value);
    }

    const BUTTON_COLOR = "black"

    const SVG_STYLE = {
        height: "40px",
        width: "40px"
    }

    /*

<audio 
                    id="audio-player-sound" 
                    ref={ audioRef }
                    src={ 
                        process.env.PUBLIC_URL + "/static/sound_assets/montage/" + assetList.listenAssets['montage'].file_location 
                    }
                    autoPlay={ true }
                />
    */

    return(
        <div className="category-reel">
            <AudioPlayer 
                category='montage'
                toggleAudioOpen={ props.toggleAudioOpen } 
                audioName='montage'
            />
        </div>
    )
}

export default Montage;


/*
<div className="player">
                
                <p className='audio-title'>{ props.audioName }</p>

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

                <audio 
                    id="audio-player-sound" 
                    ref={ audioRef }
                    src={ 
                        process.env.PUBLIC_URL + "/static/sound_assets/montage/" + assetList.listenAssets['montage'].file_location 
                    }
                    autoPlay={ true }
                />
                <div onClick={ handlePlayPause } className="play_pause" alt={playing ? "pause" : "play"} >
                    {
                        playing ?
                            <svg xmlns="http://www.w3.org/2000/svg" style={ SVG_STYLE } width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={ BUTTON_COLOR } fill="none" strokeLinecap="round" strokeLinejoin="round"
                                onClick={ props.toggleVideoPlaying }
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                            <rect x="14" y="5" width="4" height="14" rx="1"></rect>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" style={ SVG_STYLE } width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={ BUTTON_COLOR } fill="none" strokeLinecap="round" strokeLinejoin="round"
                            onClick={ props.toggleVideoPlaying }
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 4v16l13 -8z"></path>
                        </svg>
                    }

                </div>

                {/* <img onClick={ handlePlayPause } src={ playing ? Pause : Play } className="play_pause" alt={playing ? "pause" : "play"} /> }

                </div>

*/
