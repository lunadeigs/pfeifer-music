import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home/Home';
import View from './components/View/View';
import Listen from './components/Listen/Listen';

import IntroAnimation from './components/IntroAnimation';
import PreIntroAnimation from './components/PreIntroAnimation';
import Sound from 'react-sound';

function App() {
  const [playVar, setPlayVar] = useState(Sound.status.STOPPED);
  
  const pauseMusic = () => {
    if(playVar !== Sound.status.PAUSED){
      setPlayVar(Sound.status.PAUSED);
    }
  }

  const playMusic = () => {
    if(playVar !== Sound.status.PLAYING){
      setPlayVar(Sound.status.PLAYING);
    }
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Sound
            url={ process.env.PUBLIC_URL + "/static/sound_assets/montage/montage.mp3" }
            position={21100}
            playStatus={ playVar }
            autoLoad={ true }
        />

        <Navbar />
        
        <Routes>
          <Route exact path='/' element={ <PreIntroAnimation />} />
          <Route exact path='/intro' element={ <IntroAnimation playMusic={ playMusic } /> } />
          <Route exact path='/home/*' element={ <Home playMusic= { playMusic }/>} />
          <Route exact path='/view/*' element={ <View pauseMusic={ pauseMusic } /> } />
          <Route exact path='/listen/*' element={ <Listen pauseMusic={ pauseMusic } />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;