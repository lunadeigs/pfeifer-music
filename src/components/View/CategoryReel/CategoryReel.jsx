import React, { useState } from 'react';

import MiniReel from './MiniReel';
import Player from '../Player';
import assetJson from '../../../assetList.json';

const CategoryReel = (props) => {
    const [currentVideoPath, setCurrentVideoPath] = useState("publix_snowflake.mp4");
    
    const toggleVideoOpen = () => {
        props.setVideoOpen(value => !value);
    }

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
                    assetJson.viewAssets[props.category].map((item, key) => {
                        return <div className="mini-reel" onClick={ () => { 
                            setCurrentVideoPath(item.video_path) 
                            toggleVideoOpen()
                        } }>
                            <img className="mini-reel-screencap" src={ "./static/screencap_assets/" + props.category + "/" + item.screencap_path } alt={ props.name }/>
                            <p className="mini-reel-text">{ item.name.split("\"")[0]}</p>
                            <p className="mini-reel-text">"{ item.name.split("\"")[1] }"</p>
                            <p className="mini-reel-text">{ item.name.split("\"")[2] }</p>
                        </div>
                    })
            }
        </div>
    )
}

//  <MiniReel key={ key }category={ props.category } screencapPath={ item.screencap_path } videoName={ item.name} toggleVideoOpen={ toggleVideoOpen } setCurrentVideoPath={ setCurrentVideoPath } videoPath={ item.video_path }/>

export default CategoryReel;