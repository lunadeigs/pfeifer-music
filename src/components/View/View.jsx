import React, { useState, useEffect } from 'react';
import ViewSidebar from './ViewSidebar';
import ViewContent from './ViewContent';
import { useMemo } from 'react';

import assetJson from '../../assetList.json';

const View = (props) => {
    const [videoOpen, setVideoOpen] = useState(false);
    const screencapAssets = useMemo(() => {
        const newAssets = {};

        for(let category in assetJson["viewAssets"]){
            newAssets[category] = {}
            for(let screencap of assetJson["viewAssets"][category]){
                newAssets[category][screencap["screencap_path"]] = <img className="mini-reel-screencap" src={ process.env.PUBLIC_URL + "/static/screencap_assets/" + category + "/" + screencap["screencap_path"] } alt={ screencap["name"] }/>
            }
        }
        return newAssets;
    }, [])

    const closeVideoOpen = () => {
        if(videoOpen){
            setVideoOpen(value => !value);
        }
    }

    useEffect(() => {
        props.pauseMusic();
    }, [])

    return(
        <div className='main-content'>
            <ViewSidebar closeVideoOpen={ closeVideoOpen }/>
            <ViewContent videoOpen={ videoOpen } setVideoOpen={ setVideoOpen } screencapAssets={ screencapAssets }/>
        </div>
    )
}

export default View;