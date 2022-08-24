import React, { useEffect, useState } from 'react';
import assetJson from '../../assetList.json';
import Player from './Player';


const GeneralReel = (props) => {
    const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

    const generalJson = assetJson.viewAssets.general;

    const toggleVideoOpen = () => {
        console.log("Nothing Function");
    }

    return(
        <div className='main-content'>
            <Player 
                category="general"
                asset={ generalJson[currentAssetIndex]}
                toggleVideoOpen={ toggleVideoOpen }
                setCurrentAssetIndex={ setCurrentAssetIndex }
                currentAssetIndex={ currentAssetIndex }
            />
        </div>
    )
}

export default GeneralReel;