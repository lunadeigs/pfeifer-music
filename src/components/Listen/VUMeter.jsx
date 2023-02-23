/* External Dependencies */
import React, { useState, useEffect, useRef, useMemo } from 'react';

/* Internal Dependencies */

/** VU meter animation for Audio Clips */
export default function VUMeter(props){
    const audioElementReference = props.audioElement;

    const AudioContextRef = useRef(undefined);
    const AudioAnalyzer = useRef(undefined)
    const AudioSource = useRef(undefined)
    
    useEffect(() => {
        audioElementReference.play();
        if(AudioSource.current === undefined){
            AudioContextRef.current = new window.AudioContext();
            AudioAnalyzer.current = AudioContextRef.current.createAnalyser();
            AudioSource.current = AudioContextRef.current.createMediaElementSource(audioElementReference);
            AudioSource.current.connect(AudioAnalyzer.current)
        }

        console.log("Context Created")
    }, [audioElementReference])

    const [audioSpectrumProperties, setAudioSpectrumProperties] = useState({
        width: 0,
        height: 0,
        meterWidth: 0,
        gap: 0
    })

    // useEffect(() => {
    //     function resizeAudioSpectrum(){
    //         console.log(audioSpectrumContainerRef.current.clientWidth * 0.0125)
    //         setAudioSpectrumProperties({
    //             width: audioSpectrumContainerRef.current.clientWidth,
    //             height: audioSpectrumContainerRef.current.clientHeight,
    //             meterWidth: audioSpectrumContainerRef.current.clientWidth*0.1,
    //             gap: audioSpectrumContainerRef.current.clientWidth * 0.0125
    //         })
    //     }
    //     window.addEventListener("resize", resizeAudioSpectrum);

    //     if(audioSpectrumProperties.width === 0 && audioSpectrumProperties.height === 0){
    //         resizeAudioSpectrum();
    //     }

    //     return(() => {
    //         window.removeEventListener("resize", resizeAudioSpectrum);
    //     }) 
    // })

    return(
        <div className="vu-meter-container">

        </div>
    )
}