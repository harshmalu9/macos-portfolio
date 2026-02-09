import React from 'react';
import MacWindow from './MacWindow';
import Terminal from 'react-console-emulator';
import './cli.scss';
import commands from './cliCommands.js'

const Cli = () => {
  return (
    <MacWindow>
      <div className='cli-window'>
        <Terminal
          commands={commands}
          noDefaults={true}
          welcomeMessage={'Welcome to the React terminal!'}
          promptLabel={'harshmalu9:~$'}
          promptLabelStyle={{ color: 'papayahip'}}
          messageStyle={{ color: 'orange'}}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
