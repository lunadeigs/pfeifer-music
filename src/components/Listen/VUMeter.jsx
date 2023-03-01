/* External Dependencies */
import React, { useState, useEffect, useRef, useMemo } from 'react';

/* Internal Dependencies */

/** VU meter animation for Audio Clips */
export default function VUMeter(props){
    const audioElementReference = props.audioElement;

    const AudioContextRef = useRef(undefined);
    const AudioAnalyzer = useRef(undefined)
    const AudioSource = useRef(undefined)
    const ScriptNode = useRef(undefined)

    const CanvasRef = useRef(undefined);

    /*
    let cwidth = this.audioCanvas.width
        let cheight = this.audioCanvas.height - this.props.capHeight
        let capYPositionArray = [] // store the vertical position of hte caps for the preivous frame
        let ctx = this.audioCanvas.getContext('2d')
        let gradient = ctx.createLinearGradient(0, 0, 0, 300)

        if (this.props.meterColor.constructor === Array) {
            let stops = this.props.meterColor
            let len = stops.length
            for (let i = 0; i < len; i++) {
                gradient.addColorStop(stops[i]['stop'], stops[i]['color'])
            }
            } else if (typeof this.props.meterColor === 'string') {
                gradient = this.props.meterColor
            }

            let drawMeter = () => {
            let array = new Uint8Array(analyser.frequencyBinCount); // item value of array: 0 - 255
            analyser.getByteFrequencyData(array);
            if (this.playStatus === 'PAUSED') {
                for (let i = array.length - 1; i >= 0; i--) {
                    array[i] = 0
                }
                let allCapsReachBottom = !capYPositionArray.some(cap => cap > 0)
                if (allCapsReachBottom) {
                    ctx.clearRect(0, 0, cwidth, cheight + this.props.capHeight)
                    cancelAnimationFrame(this.animationId) // since the sound is top and animation finished, stop the requestAnimation to prevent potential memory leak,THIS IS VERY IMPORTANT!
                    return
                }
            }
            let step = Math.round(array.length / this.props.meterCount) // sample limited data from the total array
            ctx.clearRect(0, 0, cwidth, cheight + this.props.capHeight)
            for (let i = 0; i < this.props.meterCount; i++) {
                let value = array[i * step]
                if (capYPositionArray.length < Math.round(this.props.meterCount)) {
                    capYPositionArray.push(value)
                };
                ctx.fillStyle = this.props.capColor
                // draw the cap, with transition effect
                if (value < capYPositionArray[i]) {
                    // let y = cheight - (--capYPositionArray[i])
                    let preValue = --capYPositionArray[i]
                    let y = (270 - preValue) * cheight / 270
                    ctx.fillRect(i * (this.props.meterWidth + this.props.gap), y, this.props.meterWidth, this.props.capHeight)
                } else {
                    // let y = cheight - value
                    let y = (270 - value) * cheight / 270
                    ctx.fillRect(i * (this.props.meterWidth + this.props.gap), y, this.props.meterWidth, this.props.capHeight)
                    capYPositionArray[i] = value
                };
                ctx.fillStyle = gradient; // set the filllStyle to gradient for a better look

                // let y = cheight - value + this.props.capHeight
                let y = (270 - value) * (cheight) / 270 + this.props.capHeight
                ctx.fillRect(i * (this.props.meterWidth + this.props.gap), y, this.props.meterWidth, cheight) // the meter
            }
            this.animationId = requestAnimationFrame(drawMeter)
        }
        this.animationId = requestAnimationFrame(drawMeter)
    }
    */
    
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


        console.log("Context Created")
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
            if(AudioAnalyzer.current === undefined || AudioContextRef.current === undefined || CanvasRef.current === undefined) return;

            const canvasContext = CanvasRef.current.getContext('2d'); 

            let array = new Uint8Array(AudioAnalyzer.current.frequencyBinCount); // item value of array: 0 - 255
            AudioAnalyzer.current.getByteFrequencyData(array);

            const audioLevels = []
            // 0 = 0 && 0 = 2
            // 255 = 100 && 100 = 20
            // 25.5
            // 14.167
            // 13.421
            console.log(`Array Length: ${array.length}`);
            for(let i = 0; i < 50; i += 1){
                let newMax = 0;
                for(let j = i*8; j < (i+1)*8; j++){
                    if(array[j] / 13.421 > newMax){
                        newMax = array[j] / 13.421
                    }
                }
                audioLevels.push(newMax)
            }

            console.log(audioLevels)

            if(audioElementReference.paused){
                console.log("Paused");
                return
            }

            canvasContext.clearRect(0, 0, audioSpectrumProperties.width, audioSpectrumProperties.height)
            
            //const gradient = canvasContext.createLinearGradient(0, 0, 0, audioSpectrumProperties.height)
            
            let heightStepSize = audioSpectrumProperties.height * 0.04;
            let heightGapSize = audioSpectrumProperties.height * 0.01;

            let stepSize = audioSpectrumProperties.width * 0.087912
            let gapSize = audioSpectrumProperties.width * 0.010989
            
            console.log(`Height: ${audioSpectrumProperties.height}`)
            console.log(`Width: ${audioSpectrumProperties.width}`)
            console.log(`Step Size: ${stepSize}`)
            console.log(`Gap Size: ${gapSize}`)


            for(let i = 0; i < 20; i += 1){
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
            console.log(ContainerRef.current.clientWidth * 0.0125)
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