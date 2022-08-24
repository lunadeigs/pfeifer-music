import React from 'react';

const ContactBlock = () => {
    return (
        <div className='contact-block'>
            <div className='contact-info'>
                <p className='contact-red'>contact:</p>
                <p>howard pfeifer</p>
                <p>312.467.7027</p>
                <p className='contact-blue'>howard@pfeifermusic.com</p>
            </div>

            <br />

            <div className='contact-info'>
                <p>5974 n leader av</p>
                <p>chicago, il 60646</p>
            </div>
        </div>
    )
}

export default ContactBlock;