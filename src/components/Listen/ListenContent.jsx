/* External dependencies */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Internal depenedencies */
import CategoryReel from './CategoryReel';
import Montage from './Montage';

/* Content container for the listen page */
const ListenContent = (props) => {
    const location = useLocation();

    const [currentAudioName, setCurrentAudioName] = useState('');
    const [childKey, setChildKey] = useState(0);

    const CATEGORY_NAMES = {
        "montage": "audio montage",
        "grooves": "grooves",
        "jazz": "jazz/blues",
        "orchestral": "orchestral",
        "ethereal": "ethereal/emotional",
        "alternative": "alternative/classic rock",
        "vocals": "vocals",
        "good": "good times/americana",
        "quirky": "quirky",
        "world": "world",
        "childrens": "chipmunks montage"
    }

    function toggleAudioOpen(name=''){
        setChildKey(value => value + 1);
        if(!props.audioOpen){
            setCurrentAudioName(name)
        }
        props.setAudioOpen(value => !value);
    }

    useEffect(() => {
        setChildKey(value => value + 1);
        if(props.audioOpen){
            toggleAudioOpen();
        }
    }, [location.pathname])

    return(
        <div className='page-content content-content'>
            <h1 className='content-content-title'>{ CATEGORY_NAMES[location.pathname.split('/listen/')[1]] }</h1>
            { location.pathname.split('/listen/')[1] !== undefined ? 
                <hr className='content-content-line'/> 
                : 
                null 
            }

            { location.pathname.split('/listen/')[1] === undefined ? 
                null
                : 
                location.pathname.split('/listen/')[1] === 'montage' ?
                    <Montage audioOpen={ props.audioOpen } setAudioOpen={ props.setAudioOpen } currentAudioName={ currentAudioName } setCurrentAudioName={ setCurrentAudioName } toggleAudioOpen={ toggleAudioOpen } />
                    :
                    <CategoryReel key={ childKey } currentAudioName={ currentAudioName } setCurrentAudioName={ setCurrentAudioName } toggleAudioOpen={ toggleAudioOpen } audioOpen={ props.audioOpen } setAudioOpen={ props.setAudioOpen } category={ location.pathname.split('/listen/')[1] }/>
            }
        </div>
        //     { 
        //         location.pathname.split('/listen/')[1] !== undefined ? 
        //             <hr className='view-content-line'/> 
        //             : 
        //             null 
        //     }
        // <div className='view-content'>
        //     <h1 className='view-content-title'>{ CATEGORY_NAMES[location.pathname.split('/listen/')[1]] }</h1>
        //     { 
        //         location.pathname.split('/listen/')[1] !== undefined ? 
        //             <hr className='view-content-line'/> 
        //             : 
        //     }

        //     { 
        //         location.pathname.split('/listen/')[1] === undefined ? 
        //             null
        //             : 
        //             location.pathname.split('/listen/')[1] === 'montage' ?
        //                 <Montage audioOpen={ props.audioOpen } setAudioOpen={ props.setAudioOpen } currentAudioName={ currentAudioName } setCurrentAudioName={ setCurrentAudioName } toggleAudioOpen={ toggleAudioOpen } />
        //                 :
        //                 <CategoryReel key={ childKey } currentAudioName={ currentAudioName } setCurrentAudioName={ setCurrentAudioName } toggleAudioOpen={ toggleAudioOpen } audioOpen={ props.audioOpen } setAudioOpen={ props.setAudioOpen } category={ location.pathname.split('/listen/')[1] }/>
        //     }

        // </div>
    )
}

export default ListenContent;