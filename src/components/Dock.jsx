import React from 'react'
import './dock.scss'

const Dock = ({ windowState, setWindowState }) => {
  return (
    <div>
        <footer className='dock'>
            <div 
              className='icon github' onClick={() => setWindowState({ ...windowState, github: !windowState.github })}>
               <img src="/dock-icons/github.svg"/>
            </div>
            <div className='icon calendar'> <img src="/dock-icons/calendar.svg"/></div>
            <div className='icon cli' onClick={() => setWindowState({ ...windowState, cli: !windowState.cli })}> <img src="/dock-icons/cli.svg"/></div>
            <div className='icon note' onClick={() => setWindowState({ ...windowState, note: !windowState.note })}> <img src="/dock-icons/note.svg"/></div>
            <div className='icon link'> <img src="/dock-icons/link.svg"/></div>
            <div className='icon mail'> <img src="/dock-icons/mail.svg"/></div>
            <div className='icon spotify' onClick={() => setWindowState({ ...windowState, spotify: !windowState.spotify })}> <img src="/dock-icons/spotify.svg"/></div>
            <div className='icon resume' onClick={() => setWindowState({ ...windowState, resume: !windowState.resume })}> <img src="/dock-icons/pdf.svg"/></div>
        </footer>
    </div>
  )
}

export default Dock 