import React from 'react';
import { useLocation } from 'react-router-dom';

import GeneralReel from './GeneralReel';
import CategoryReel from './CategoryReel/CategoryReel';

const ViewContent = (props) => {
    const location = useLocation();

    const categoryNames = {
        "general": "general reel",
        "contemporary": "contemporary scores",
        "humor": "humor",
        "moods": "moods",
        "orchestral": "orchestral",
        "spanish": "spanish market",
    }

    return(
        <div className='view-content'>
            <h1 className='view-content-title'>{ categoryNames[location.pathname.split('/view/')[1]] }</h1>
            { 
                location.pathname.split('/view/')[1] !== undefined ? 
                    <hr className='view-content-line'/> 
                    : 
                    null 
            }

            {
                location.pathname.split('/view/')[1] !== undefined ?
                    location.pathname.split('/view/')[1] === 'general' ?
                        <GeneralReel videoOpen={ props.videoOpen } setVideoOpen={ props.setVideoOpen } category={location.pathname.split('/view/')[1]} />
                        :
                        <CategoryReel videoOpen={ props.videoOpen } setVideoOpen={ props.setVideoOpen } category={location.pathname.split('/view/')[1]} />
                    :
                    null
            }
        </div>
    )
}
export default ViewContent;