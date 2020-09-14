import React, { useEffect, useState } from 'react';

export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    setStatus(navigator.onLine);
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    }
  }, []);
  return status;
};

export default function SampleUseNetworkComponent() {
  const onGoOffline = (isOnline) => {
    if (!isOnline) {
      alert('Hey, you are offline.');
    }
  };
  const isOnline = useNetwork(onGoOffline);

  return (
    <div>{
      isOnline
        ? 'you are online.'
        : 'you are offline.'
    }</div>
  );
}