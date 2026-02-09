import React, { useState, useEffect } from 'react'
import './note.scss'
import MacWindow from './MacWindow'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = () => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch('/notes.txt')
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [])

  return (
    <MacWindow>
        <div className="note-window">
            {/* { markdown ? <Markdown>{markdown}</Markdown> : <p>Loading...</p>} */}
            <SyntaxHighlighter language='typescript' style={atomOneDarkReasonable}>
                {markdown}
            </SyntaxHighlighter>
        </div>
    </MacWindow>
  )
}

export default Note