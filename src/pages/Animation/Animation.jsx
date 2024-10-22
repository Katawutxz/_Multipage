import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Animation.css';

function Animation() {
    const fieldWidth = 900;
    const fieldHeight = 400;
    const diameter = 100;
    const maxLeft = fieldWidth - diameter - 2;
    const maxTop = fieldHeight - diameter - 2;
    const vx = 5;
    const vy = 5;
  
    const [running, setRunning] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [deg, setDeg] = useState(0);
    const [rotationDirection, setRotationDirection] = useState(randomDirection());
    const [activePicture, setActivePicture] = useState('none'); // Track active picture
  
    useEffect(() => {
      const process = () => {
        if (running) {
          calculatePosition();
        }
      };
      const intervalId = setInterval(process, 16.666); // 60fps
      return () => clearInterval(intervalId); // Clean up on unmount
    }, [running, x, y, deg]);
  
    function randomDirection() {
      return Math.random() < 0.5 ? 1 : -1;
    }
  
    function toggleRunning() {
      setRunning(!running);
    }
  
    function calculatePosition() {
      let newX = x;
      let newY = y;
      let newDeg = deg;
  
      if (goRight) {
        newX += vx;
        if (newX >= maxLeft) {
          newX = maxLeft - (newX - maxLeft);
          setGoRight(false);
          setRotationDirection(randomDirection());
        }
      } else {
        newX -= vx;
        if (newX <= 0) {
          newX = -newX;
          setGoRight(true);
          setRotationDirection(randomDirection());
        }
      }
  
      if (goDown) {
        newY += vy;
        if (newY >= maxTop) {
          newY = maxTop - (newY - maxTop);
          setGoDown(false);
          setRotationDirection(randomDirection());
        }
      } else {
        newY -= vy;
        if (newY <= 0) {
          newY = -newY;
          setGoDown(true);
          setRotationDirection(randomDirection());
        }
      }
  
      setX(newX);
      setY(newY);
      setDeg(newDeg + 5 * rotationDirection);
    }
  
    function handlePictureChange(type) {
      setActivePicture(type); // Set the active picture
    }
  
    // Map the type to the corresponding image URL
    const getBackgroundImage = (type) => {
      switch (type) {
        case 'basketball':
          return "url('./img/Basketball.png')";
        case 'football':
          return "url('./img/football.png')";
        case 'volleyball':
          return "url('./img/volleyball.png')";
        case 'human':
          return "url('./img/Humen.jpg')";
        case 'cartoon':
          return "url('./img/Cartoon.png')";
        case 'logo':
          return "url('./img/Logo.png')";
        default:
          return 'none';
      }
    };
  
    return (
      <div id="animation-container">
        <div id="field" style={{ height: `${fieldHeight}px`, width: `${fieldWidth}px` }}>
          <div
            id="ball"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: `rotate(${deg}deg)`,
              height: `${diameter}px`,
              width: `${diameter}px`,
              backgroundImage: getBackgroundImage(activePicture),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div id="control">
          <button id="run" className={`btn ${running ? 'btn-warning' : 'btn-success'}`} onClick={toggleRunning}>
            <span className={`bi ${running ? 'bi-pause-fill' : 'bi-play-fill'}`}></span>&nbsp;
            {running ? 'Pause' : 'Run'}
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className={`btn btn-outline-primary ${activePicture === 'none' ? 'active' : ''}`}
            onClick={() => handlePictureChange('none')}
          >
            None
          </button>
          <button
            className={`btn btn-outline-primary ${activePicture === 'basketball' ? 'active' : ''}`}
            onClick={() => handlePictureChange('basketball')}
          >
            Basketball
          </button>
          <button
            className={`btn btn-outline-primary ${activePicture === 'football' ? 'active' : ''}`}
            onClick={() => handlePictureChange('football')}
          >
            Football
          </button>
          <button
            className={`btn btn-outline-primary ${activePicture === 'volleyball' ? 'active' : ''}`}
            onClick={() => handlePictureChange('volleyball')}
          >
            Volleyball
          </button>
          <button
            className={`btn btn-outline-primary ${activePicture === 'human' ? 'active' : ''}`}
            onClick={() => handlePictureChange('human')}
          >
            Human
          </button>
          <button
            className={`btn btn-outline-primary ${activePicture === 'cartoon' ? 'active' : ''}`}
            onClick={() => handlePictureChange('cartoon')}
          >
            Cartoon
          </button>
          <button
            className={`btn btn-outline-primary ${activePicture === 'logo' ? 'active' : ''}`}
            onClick={() => handlePictureChange('logo')}
          >
            Logo
          </button>
        </div>
      </div>
    );
  }
  
  
  
  export default Animation;