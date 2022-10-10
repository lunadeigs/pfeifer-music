import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import AudioPlayer from '../AudioPlayer';

import assetList from '../../../assetList.json'


const CategoryReel = (props) => {
    useEffect(() => {
        console.log(props.category);
        console.log(assetList);
    }, [])

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
                        <div className="audio-list">
                            {
                                assetList.listenAssets[props.category].map((item, key) => {
                                    return <p style={{
                                        margin: (props.category) === "orchestral"?
                                            1
                                            :
                                            props.category === "ethereal" ?
                                                3
                                                :
                                                48 / (assetList.listenAssets[props.category].length)
                                        
                                    }} key={ key } className="mini-audio" onClick={ () => { props.toggleAudioOpen(item.name) }}>{ item.name }</p>
                                })
                            }
                        </div>
            }
            
        </div>
    )
}

export default CategoryReel;