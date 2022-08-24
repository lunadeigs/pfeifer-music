import React, { useState, useEffect } from 'react';
import ViewSidebar from './ViewSidebar';
import ViewContent from './ViewContent';

const View = (props) => {
    const [videoOpen, setVideoOpen] = useState(false);

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
            <ViewContent videoOpen={ videoOpen } setVideoOpen={ setVideoOpen }/>
        </div>
    )
}

export default View;