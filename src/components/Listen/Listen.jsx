/* External dependencies */
import React, { useState } from 'react';

/* Internal dependencies */
import ListenSidebar from './ListenSidebar';
import ListenContent from './ListenContent';

/** Container for the listen page */
const Listen = (props) => {
    const [audioOpen, setAudioOpen] = useState(false);
    props.pauseMusic();
    
    return(
        <div className='main-content'>
            <ListenSidebar audioOpen={ audioOpen } setAudioOpen={ setAudioOpen }/>
            <ListenContent audioOpen={ audioOpen } setAudioOpen={ setAudioOpen }/>
        </div>
    )
}

export default Listen;