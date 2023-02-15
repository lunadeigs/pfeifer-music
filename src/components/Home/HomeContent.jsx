/* External Dependencies */
import React from 'react';

/* Internal Dependencies */
import Note from '../../Image_Assets/Pfeifer_Note.png';

/** Main content for the home page */
const HomePageContent = () => {
    return(
        <div className='home-page-content'>
            <img className='title-note' src={ Note } alt=" "/>
            <h1 className='title' >pfeifer</h1>
            <p className='music-partners'>music partners</p>
        </div>
    );
}

export default HomePageContent