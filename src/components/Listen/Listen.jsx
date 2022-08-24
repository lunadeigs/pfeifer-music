import React, { useState } from 'react';

import ListenSidebar from './ListenSidebar';
import ListenContent from './ListenContent';
import { useEffect } from 'react';

const Listen = (props) => {
    const [audioOpen, setAudioOpen] = useState(false);

    useEffect(() => {
        props.pauseMusic();
    }, [])
    
    return(
        <div className='main-content'>
            <ListenSidebar audioOpen={ audioOpen } setAudioOpen={ setAudioOpen }/>
            <ListenContent audioOpen={ audioOpen } setAudioOpen={ setAudioOpen }/>
        </div>
    )
}

export default Listen;