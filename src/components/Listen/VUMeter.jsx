/* External Dependencies */
import React, { useState, useEffect, useRef, useMemo } from 'react';

/* Internal Dependencies */

/** VU meter animation for Audio Clips */
export default function VUMeter(props){
    const audioElementReference = props.audioElement;

    const AudioContextRef = useRef(undefined);
    const AudioAnalyzer = useRef(undefined)
    const AudioSource = useRef(undefined)

    const CanvasRef = useRef(undefined);

    const CurrentAudioLevels = useRef(undefined)
    const CurrentMaxLevel = useRef(20)

    useEffect(() => {
        if(AudioSource.current === undefined){
            AudioContextRef.current = new window.AudioContext();
            AudioAnalyzer.current = AudioContextRef.current.createAnalyser();
            AudioSource.current = AudioContextRef.current.createMediaElementSource(audioElementReference);
            AudioSource.current.connect(AudioAnalyzer.current)
            AudioSource.current.connect(AudioContextRef.current.destination);

            AudioAnalyzer.current.smoothingTimeConstant = 0.8
            AudioAnalyzer.current.fftSize = 1024
        }
    }, [audioElementReference])

    const ContainerRef = useRef(undefined)
    const [audioSpectrumProperties, setAudioSpectrumProperties] = useState({
        width: 0,
        height: 0,
        meterWidth: 0,
        gap: 0
    })

    useEffect(() => {
        function drawMeter(){
            if(AudioAnalyzer.current === undefined || AudioContextRef.current === undefined || CanvasRef.current === undefined || CanvasRef.current === null) return;

            const canvasContext = CanvasRef.current.getContext('2d'); 

            let array = new Uint8Array(AudioAnalyzer.current.frequencyBinCount); // item value of array: 0 - 255
            AudioAnalyzer.current.getByteFrequencyData(array);

            let audioLevels = []
            // 0 = 0 && 0 = 2
            // 255 = 100 && 100 = 20
            // 25.5
            // 14.167
            // 13.421
            for(let i = 0; i < 50; i += 1){
                let newMax = 0;
                for(let j = i*6; j < (i+1)*6; j++){
                    if(array[j] / 13.421 > newMax){
                        newMax = array[j] / 13.421
                    }
                }
                audioLevels.push(newMax)
            }

            let maxLevel = 20;

            if(audioElementReference.paused){
                if(CurrentAudioLevels.current === undefined){
                    CurrentAudioLevels.current = audioLevels
                }else{
                    setTimeout(() => {
                        CurrentAudioLevels.current = CurrentAudioLevels.current.map((level) => {
                            if(level >= 1) return (level - 1)
                            return 0
                        })
                        audioLevels = CurrentAudioLevels.current
                        
                    }, 600)
                }
                CurrentMaxLevel.current = 1;
            }else{
                CurrentAudioLevels.current = audioLevels
            }
            

            canvasContext.clearRect(0, 0, audioSpectrumProperties.width, audioSpectrumProperties.height)
            
            //const gradient = canvasContext.createLinearGradient(0, 0, 0, audioSpectrumProperties.height)
            let heightStepSize = audioSpectrumProperties.height * 0.04;
            let heightGapSize = audioSpectrumProperties.height * 0.01;

            let stepSize = audioSpectrumProperties.width * 0.087912
            let gapSize = audioSpectrumProperties.width * 0.010989

            for(let i = 0; i < 20; i += 1){
                if(i > CurrentMaxLevel.current && !audioElementReference.paused){
                    return setTimeout(() => {
                        CurrentMaxLevel.current = CurrentMaxLevel.current + 1
                        window.requestAnimationFrame(drawMeter)
                    }, 25)
                }

                for(let j = 0; j < 50; j += 1){
                    if(i < 12) canvasContext.fillStyle = 'green';
                    else if(i < 16) canvasContext.fillStyle = 'yellow';
                    else if(i < 18) canvasContext.fillStyle = 'orange';
                    else canvasContext.fillStyle = 'red';

                    

                    if( audioLevels[j] + 1 > i){
                        const newGapSize = gapSize / 5;
                        const newStepSize = stepSize / 5;
                        const rectangleX = (j * newStepSize) + ((j + 1) * newGapSize)
                        const rectangleY = audioSpectrumProperties.height - (i * (heightStepSize + heightGapSize));
                        const rectangleWidth = newStepSize;
                        const rectangleHeight = -1 * (heightStepSize);

                        // const rectangleX = (j * stepSize) + ((j + 1) * gapSize)
                        // const rectangleY = audioSpectrumProperties.height - (i * (heightStepSize + heightGapSize));
                        // const rectangleWidth = stepSize;
                        // const rectangleHeight = -1 * (heightStepSize);

                        canvasContext.fillRect(
                            rectangleX,
                            rectangleY, 
                            rectangleWidth, 
                            rectangleHeight
                        )
                    }
                }
            }
            window.requestAnimationFrame(drawMeter)
        }

        window.requestAnimationFrame(drawMeter)

        
    })

    useEffect(() => {
        function resizeAudioSpectrum(){
            setAudioSpectrumProperties({
                width: ContainerRef.current.clientWidth,
                height: ContainerRef.current.clientHeight,
                meterWidth: ContainerRef.current.clientWidth*0.1,
                gap: ContainerRef.current.clientWidth * 0.0125
            })
        }

        window.addEventListener("resize", resizeAudioSpectrum);

        if(audioSpectrumProperties.width === 0 && audioSpectrumProperties.height === 0){
            resizeAudioSpectrum();
        }

        return(() => {
            window.removeEventListener("resize", resizeAudioSpectrum);
        }) 
    })

    return(
        <div className="vu-meter-container" ref={ ContainerRef }>
            <canvas
                height={ audioSpectrumProperties.height }
                width={ audioSpectrumProperties.width }
                ref={ CanvasRef }
            ></canvas>
        </div>
    )
}