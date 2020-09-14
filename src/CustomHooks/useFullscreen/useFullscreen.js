import React, { useRef } from 'react';

export const useFullscreen = () => {
  const element = useRef();
  const triggerFullscreen = () => {
    if (element.current) {
      const e = element.current;
      if (e.requestFullscreen) {
        e.requestFullscreen();
      } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
      } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen();
      } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen();
      }
    }
  };
  const exitFullscreen = () => {
    const d = document;
    if (d.exitFullscreen) {
      d.exitFullscreen();
    } else if (d.mozCancelFullScreen) {
      d.mozCancelFullScreen();
    } else if (d.webkitExitFullscreen) {
      d.webkitExitFullscreen();
    } else if (d.msExitFullscreen) {
      d.msExitFullscreen();
    }
  }
  return { element, triggerFullscreen, exitFullscreen };
};

export default function SampleUseFullScreenComponent() {
  const imageUrl = 'https://media1.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif';
  const { element: fullscreenElement, triggerFullscreen, exitFullscreen } = useFullscreen();

  return (
    <div>
      <div ref={fullscreenElement}>
        <img src={imageUrl} alt="cute kitty"/>
        <button onClick={exitFullscreen}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFullscreen}>Let's go fullscreen</button>
    </div>
  );
}