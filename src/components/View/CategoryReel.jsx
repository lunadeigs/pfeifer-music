/* External dependencies */
import React, { useState, useEffect } from 'react';

/* Internal dependencies */
import Player from './Player';
import assetJson from '../../assetList.json';
import '../../CSS/miniReel.css'

//FIX Might be best to just memoize all the video componenets and then load them as they appear. Just annoying to rerender every single time.

/* Category reel for video components */
function CategoryReel(props){
    const [currentVideoPath, setCurrentVideoPath] = useState("publix_snowflake.mp4");
    const [currentStartKey, setCurrentStartKey] = useState(0);
    const [currentMiniReels, setCurrentMiniReels] = useState(assetJson.viewAssets[props.category].map(
        (item, key) => {
            return buildNewMiniReel(item, key)
        }
    ));
    
    function toggleVideoOpen(){
        props.setVideoOpen(value => !value);
    }

    function buildNewMiniReel(item, key){
        return(
            <div 
                key={ key } 
                className="mini-reel"
                style={ dynamicAnimationStyle(key) } 
                onClick={ () => { 
                    setCurrentVideoPath(item.video_path) 
                    toggleVideoOpen()
                } 
            }>
                { props.screencapAssets[props.category][item.screencap_path] }
                {/* <img className="mini-reel-screencap" src={ process.env.PUBLIC_URL + "/static/screencap_assets/" + props.category + "/" + item.screencap_path } alt={ props.name } loading="eager"/> */}
                <p className="mini-reel-text">{ item.name.split("\"")[0]}</p>
                <p className="mini-reel-text">"{ item.name.split("\"")[1] }"</p>
                <p className="mini-reel-text">{ item.name.split("\"")[2] }</p>
            </div>
        )
    }

    function dynamicAnimationStyle(itemKey){
        let seconds;
        if(itemKey >= 20){
            seconds = Math.floor((itemKey-20) / 4) * 0.15;
        }else{
            seconds = Math.floor(itemKey / 4) * 0.15;
        }

        return({
            "WebkitAnimationDuration": "2s",
            "animationDuration": "2s",
            "WebkitAnimationDelay": seconds + "s",
            "animationDelay": seconds + "s",
            "animationName": "mini-reel-animation"
        })
    }

    useEffect(() => {
        const newMiniReels = assetJson.viewAssets[props.category].map((item, key) => {
            return buildNewMiniReel(item, key+currentStartKey)
        })

        if(currentStartKey === 0){
            setCurrentStartKey(20)
        }else{
            setCurrentStartKey(0);
        }

        setCurrentMiniReels(newMiniReels);
    }, [props.category])

    return(
        <div className='category-reel'>
            {
                props.videoOpen ?
                    <Player 
                        category={ props.category }
                        asset={ assetJson.viewAssets[props.category].find(name => name.video_path === currentVideoPath)}
                        toggleVideoOpen={ toggleVideoOpen }
                    />
                    :
                    currentMiniReels.map(val => val)
            }
        </div>
    )
}

export default CategoryReel;