/* External dependencies */
import React, { useRef } from 'react';

/** Contact information for home page */
const ContactBlock = () => {
    const sidebarDivRef = useRef();

    return (
        <div ref={ sidebarDivRef } className='page-sidebar home-page-sidebar unselectable'>
            <div className='contact-info'>
                <p className='red-text'>contact:</p>
                <p>howard pfeifer</p>
                <p>312.467.7027</p>
                <p className='blue-text'>howard@pfeifermusic.com</p>
            </div>

            <br />

            <div className='contact-info unselectable'>
                <p>5974 n leader av</p>
                <p>chicago, il 60646</p>
            </div>
        </div>
    )
}

export default ContactBlock;