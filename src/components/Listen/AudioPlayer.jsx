/* External dependencies */
import React, { useState, useMemo, useEffect } from 'react';

/* Internal dependencies */
import Note from "../../Image_Assets/Pfeifer_Note.png";
import assetList from '../../assetList.json'
import VUMeter from './VUMeter';

/* Audio player for listen page */
const AudioPlayer = (props) => {
    const audioCategory = props.category
    const audioName = props.audioName
    

    const audioElement = useMemo(() => new Audio(
        process.env.PUBLIC_URL + "/static/sound_assets/" + audioCategory + '/' + assetList.listenAssets[audioCategory].find(value => value.name === audioName).file_location
    ), [audioCategory, audioName]);

    /*
        grd.addColorStop(0.05, '#FF0000');
        grd.addColorStop(0.15, '#FFA500');
        grd.addColorStop(0.25, '#FFFF00');
        grd.addColorStop(0.3, '#FFFF00');
        grd.addColorStop(0.6, '#00CB00');
    */

    // useEffect(() => {
    //     audioElement.id = 'audio-player-sound'
    //     audioElement.addEventListener('canplaythrough', () => {
    //         audioElement.play();
    //     })

    //     return(() => {
    //         console.log("un render")
    //         audioElement.removeEventListener('canplaythrough', () => {
    //             audioElement.play();
    //         })

    //         if(!audioElement.paused){
    //             audioElement.pause();
    //         }
    //     })
    // }, [audioElement])
    const [playing, setPlaying] = useState(true);

    function handlePlayPause(){
        if(!audioElement.paused){
            audioElement.pause();
            if(playing){
                setPlaying(value => !value);
            }
        }else{
            audioElement.play();
            if(!playing){
                setPlaying(value => !value);
            }
        }
    }

    function closePause(){
        if(!audioElement.paused){
            if(playing){
                setPlaying(value => !value);
            }
            audioElement.pause();
        }
    }

    const BUTTON_COLOR = "black"
    
    return(
        <div className="player">
            <div className="audio-title-row">
                <h3 className='audio-title'>{ props.audioName }</h3>
                <div className="back-button audio-back-button" onClick={ () => {
                    closePause()
                    props.toggleAudioOpen()
                }} >
                    <img src={ Note } alt="" className="button-note" />
                    <span className="button-text">back</span>
                </div>
            </div>

            <VUMeter 
                audioElement={ audioElement }
            />
            
            <div 
                className="audio-control-container" 
                alt={playing ? "pause" : "play"}

                onClick={ handlePlayPause } 
            >
                {
                    playing ?
                        <svg
                            className="audio-control-button"
                            stroke={ BUTTON_COLOR }
                            onClick={ props.toggleVideoPlaying }

                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="6" y="5" width="4" height="14" rx="1"></rect>
                        <rect x="14" y="5" width="4" height="14" rx="1"></rect>
                    </svg>
                    :
                    <svg 
                        className="audio-control-button"
                        stroke={ BUTTON_COLOR }
                        onClick={ props.toggleVideoPlaying }

                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5"  fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 4v16l13 -8z"></path>
                    </svg>
                }

            </div>
        </div>
    )
}

export default AudioPlayer;