/* External dependencies */
import React from 'react';
import { useLocation } from 'react-router-dom';

/* Internal dependencies */
import GeneralReel from './GeneralReel';
import CategoryReel from './CategoryReel';

/* Content container for the view page */
const ViewContent = (props) => {
    const location = useLocation();

    const CATEGORY_NAMES = {
        "general": "general reel",
        "contemporary": "contemporary scores",
        "humor": "humor",
        "moods": "moods",
        "orchestral": "orchestral",
        "spanish": "spanish market",
    }

    return(
        <div className='page-content content-content'>
            {/* <h1 className='view-content-title'>{ CATEGORY_NAMES[location.pathname.split('/view/')[1]] }</h1>
            { 
                location.pathname.split('/view/')[1] !== undefined ? 
                    <hr className='view-content-line'/> 
                    : 
                    null 
            }

            {
                location.pathname.split('/view/')[1] !== undefined ?
                    location.pathname.split('/view/')[1] === 'general' ?
                        <GeneralReel videoOpen={ props.videoOpen } setVideoOpen={ props.setVideoOpen } category={location.pathname.split('/view/')[1]} screencapAssets={ props.screencapAssets }/>
                        :
                        <CategoryReel videoOpen={ props.videoOpen } setVideoOpen={ props.setVideoOpen } category={location.pathname.split('/view/')[1]} screencapAssets={ props.screencapAssets }/>
                    :
                    null
            } */}
        </div>
    )
}
export default ViewContent;