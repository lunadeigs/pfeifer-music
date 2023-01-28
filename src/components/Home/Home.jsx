import React from 'react';
import HomeSidebar from './HomeSidebar';
import HomeContent from './HomeContent';

import { useEffect } from 'react';

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
            <HomeSidebar />
            <HomeContent />
        </div>
    )
}

export default Home;