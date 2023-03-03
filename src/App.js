/* External dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* Internal dependencies */
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import View from './components/View/View';
import Listen from './components/Listen/Listen';
import IntroAnimation from './components/IntroAnimation';
import PreIntroAnimation from './components/PreIntroAnimation';

/** Main site router */
function App() {
  const audioTag = new Audio(process.env.PUBLIC_URL + "/static/sound_assets/montage/montage.mp3");

  function handlePlay(){
    if(audioTag.paused){
      audioTag.currentTime = 21.1
      audioTag.play()
    }
  }

  function handlePause(){
    if(!audioTag.paused){
      audioTag.pause()
    }
  }

  /* width: 1140px; 1140px (Original: 760px)
  height: 810px; 810px (Original: 540px) */

  return (
      <div className="App">
        <Navbar />

        
        <Routes>
          <Route path='/' element={ <div className='page-wrapper'><PreIntroAnimation /></div>} />
          <Route path='/intro' element={ <IntroAnimation playMusic={ handlePlay } /> } />
          <Route path='/home/*' element={ <div className='page-wrapper'><Home playMusic= { handlePlay }/></div> } />
          <Route path='/view/*' element={ <div className='page-wrapper'><View pauseMusic={ handlePause } /></div> } />
          <Route path='/listen/*' element={ <div className='page-wrapper'><Listen pauseMusic={ handlePause } /></div> } />
        </Routes>
        
        <Footer />
      </div>
  );
}

export default App;