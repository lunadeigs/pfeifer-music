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

        <div className='page-wrapper'>
          <Routes>
            <Route path='/' element={ <PreIntroAnimation />} />
            <Route path='/intro' element={ <IntroAnimation playMusic={ handlePlay } /> } />
            <Route path='/home/*' element={ <Home playMusic= { handlePlay }/>} />
            <Route path='/view/*' element={ <View pauseMusic={ handlePause } /> } />
            <Route path='/listen/*' element={ <Listen pauseMusic={ handlePause } />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
  );
}

export default App;