/* External dependencies */
import React from 'react';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';

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

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route exact path='/' element={ <PreIntroAnimation />} />
          <Route exact path='/intro' element={ <IntroAnimation playMusic={ handlePlay } /> } />
          <Route exact path='/home/*' element={ <Home playMusic= { handlePlay }/>} />
          <Route exact path='/view/*' element={ <View pauseMusic={ handlePause } /> } />
          <Route exact path='/listen/*' element={ <Listen pauseMusic={ handlePause } />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;