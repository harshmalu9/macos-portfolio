import React, { useState } from 'react'
import './app.scss'
import Dock from "./components/Dock.jsx";
import Nav from './components/Nav.jsx';
import MacWindow from './components/windows/MacWindow.jsx';
import Github from './components/windows/Github.jsx';
import Note from './components/windows/Note.jsx';
import Resume from './components/windows/Resume.jsx';
import Spotify from './components/windows/Spotify.jsx';
import Cli from './components/windows/Cli.jsx';

const App = () => {

  const [windowState, setWindowState] = useState({
    github: false, 
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && <Github />}
      {windowState.note && <Note />}
      {windowState.resume && <Resume />}
      {windowState.spotify && <Spotify />}
      {windowState.cli && <Cli />}
    </main>
  )
}

export default App