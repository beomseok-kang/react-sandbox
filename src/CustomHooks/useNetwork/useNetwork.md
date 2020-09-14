## useNetwork

The `useNetwork` hook enables to check if the client is online or not. The `useNetwork` hook will return a `boolean`. You can put in one argument, an `onChange` function that takes in the `boolean` object as its argument, which will be triggered if the network status changes. The argument into the `onChange` function will be the `navigator.onLine` object, so if the client is online, the `onChange` function will take `true` as an argument, and `false` if offline.

### `useNetwork` Function Code

```javascript
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
```

### Sample Component Code

```javascript
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
```