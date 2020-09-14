import React, { useEffect, useRef } from 'react';

export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if(element.current) {
      element.current.addEventListener('click', onClick)
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    }
  }, []);
  if (typeof onClick !== 'function') {
    return;
  }
  return element;
};

export default function SampleUseClickComponent() {
  const clicked = () => {
    alert('clicked!');
  };
  const title = useClick(clicked);
  return (
    <h4 ref={title}>Click Me</h4>
  );
}