/* External dependencies */
import React, { useState, useEffect, useMemo, useCallback } from 'react';

/* Internal dependencies */
import AudioPlayer from './AudioPlayer';
import assetList from '../../assetList.json'
import '../../CSS/miniReel.css'

/** Handles category reel content for the listen page */
const CategoryReel = (props) => {
    const [currentStartKey, setCurrentStartKey] = useState(0);

    const currentCategory = props.category;
    const toggleAudioOpen = props.toggleAudioOpen;

    const dynamicStyle = useCallback((itemKey) => {
        let seconds;
        if(itemKey >= 30){
            seconds = (itemKey-20) * 0.1;
        }else{
            seconds = itemKey * 0.1;
        }

        return({
            WebkitAnimationDuration: "1s",
            animationDuration: "1s",
            WebkitAnimationDelay: seconds + "s",
            animationDelay: seconds + "s",
            animationName: "audio-title-animation"
        })
    }, [])

    /*
        margin:( (currentCategory) === "orchestral"?
            1
            :
            currentCategory === "ethereal" ?
                3
                :
                48 / (assetList.listenAssets[currentCategory].length)
        ),
    */

    const buildListenTitle = useCallback((item, key) => {
        return(
            <li style={{
                ...dynamicStyle(key) 
            }} 
                key={ key } 
                className="mini-audio" 
                onClick={ () => { toggleAudioOpen(item.name) }}>{ item.name }
            </li>
        )
    }, [currentCategory, dynamicStyle, toggleAudioOpen])

    const currentAudioTitles = useMemo(() => {
        const newTitles = assetList.listenAssets[currentCategory].map((item, key) => {
            return buildListenTitle(item, key + currentStartKey)
        })

        if(currentStartKey === 0){
            setCurrentStartKey(30)
        }else{
            setCurrentStartKey(0);
        }

        return newTitles
    }, [currentCategory, buildListenTitle, dynamicStyle]);

    return(
        <div className='category-reel'>
            {
                props.audioOpen ?
                    <AudioPlayer category={ props.category } toggleAudioOpen={ props.toggleAudioOpen } audioName={ props.currentAudioName }/>
                    :
                    props.category === "childrens" ?
                        <div className="split-audio-list">
                            <div className="half-audio-list">
                                {
                                    assetList.listenAssets[props.category].map((item, key) => {
                                        return <p key={ key } className="childrens-mini-audio" onClick={ () => { props.toggleAudioOpen(item.name) }}>{ item.name }</p>
                                    })
                                }
                            </div>
                            <div className="half-audio-list">
                                <p className="childrens-summary">Howard Pfeifer, Pfeifer Music Partners lead composer, arranged, music
                                directed and was the singing voice of “Alvin” for more than 150 songs
                                for “Alvin and The Chipmunks” for six seasons of their 1980s television
                                series, as well as several Chipmunks albums.</p>
                            </div>
                        </div>
                        :
                        <ul className="audio-list">
                            { currentAudioTitles.map(value => value) }
                        </ul>
            }
        </div>
    )
}

export default CategoryReel;