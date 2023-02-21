/* External Dependencies */
import React from 'react';

/* Internal Dependencies */
import Note from '../../Image_Assets/Pfeifer_Note.png';

/** Main content for the home page */
const HomePageContent = () => {
    return(
        <div className='page-content home-page-content'>
            <img 
                src={process.env.PUBLIC_URL + '/static/Pfeifer_Music_Logo.png'}
                alt={"Pfeifer Music Logo"}
                className="home-logo"
            />
        </div>
    );
}

export default HomePageContent