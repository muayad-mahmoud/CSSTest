import logo from './logo.svg';
import './App.css';
import { React } from 'react';
import { useState } from 'react';


const App = () => {
  const [inverse, setInverse] = useState(false);
  function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="App">
      <div>
        <div className="container">
          <h1>CSS Animation Showcase</h1>

          <div className="interactive-element">
            <button className="button" onClick={() => {
              var element = document.getElementsByClassName('box')[0];

              var randomColor = generateRandomColor();
              element.style.setProperty('--random-color', randomColor);
              element.classList.toggle('animate');

            }}>Click Me</button>
          </div>

          <div className="interactive-element">
            <input type="range" className="slider" min="0" max="100" />
          </div>

          <div className="interactive-element">
            <label className="toggle">
              <input type="checkbox" onClick={() => {
                if (inverse) {
                  setInverse(false);
                  document.getElementsByTagName('body')[0].style.setProperty('background-color', 'white');
                }
                else {
                  setInverse(true);
                  document.getElementsByTagName('body')[0].style.setProperty('background-color', 'black');
                }
              }} />
              <span className="slider"></span>
            </label>
          </div>

          <div className="pseudo-elements-section">
            <div className="box">Pseudo-elements</div>
          </div>

          <div className="elements-3d">
            <div className="card">
              <div className="front">Front</div>
              <div className="back">Back</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
