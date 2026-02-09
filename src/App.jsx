import React from 'react'
import './app.scss'
import Dock from "./components/Dock.jsx";
import Nav from './components/Nav.jsx';
import MacWindow from './components/windows/MacWindow.jsx';
import Github from './components/windows/Github.jsx';
import Note from './components/windows/Note.jsx';
import Resume from './components/windows/Resume.jsx';
import Spotify from './components/windows/Spotify.jsx';

const App = () => {
  return (
    <main>
      <Nav />
      <Github />
      <Note />
      <Resume />
      <Spotify />
      <Dock />
    </main>
  )
}

export default App