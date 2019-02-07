import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring'




function App() {


  const props = useSpring({
    from: { opacity:0, marginTop: -1000 },
    to: { opacity:1, marginTop: 0 }
  })

  return (
    <animated.div style={ props }>
          <div className='App'>
            <div>
              <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                 className="App-link"
                 href='https://reactjs.org'
                 target='_blank'
                 rel='noopener noreffer'
                >
                  Leana React
                </a>
              </header>
            </div>
          </div>
    </animated.div>
  );

}

export default App;
