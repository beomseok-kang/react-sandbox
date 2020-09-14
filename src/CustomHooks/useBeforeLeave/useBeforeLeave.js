import React, { useEffect } from 'react';

export const useBeforeLeave = (onBefore) => {
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  }
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => {
      document.removeEventListener('mouseleave', handle);
    }
  }, []);
  if (typeof onBefore !== 'function') {
    return;
  }
};

export default function SampleUseBeforeLeaveComponent() {
  const begForLife = () => console.log('please don\'t leave!');
  useBeforeLeave(begForLife);
  return (
    <div>This is nothing but a sample text.</div>
  );
}