/* External dependencies */
import React, { useEffect } from 'react';

/* Internal dependencies */
import ContactBlock from './ContactBlock';
import HomeContent from './HomeContent';

/** Home page container */
const Home = (props) => {
    useEffect(() => {
        let ignore = false;

        if(!ignore){
            console.log("Playing Home Music");
            props.playMusic();
        }

        return(() => {
            ignore = true;
        })
    })
    props.playMusic();

    return(
        <div className='main-content'>
            <ContactBlock />
            <HomeContent />
        </div>
    )
}

export default Home;