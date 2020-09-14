## useBeforeLeave

The `useBeforeLeave` hook enables the page to do something before the client's cursor leaves outside the document.

### `useBeforeLeave` Function Code

```javascript
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
```

### Sample Component Code

```javascript
export default function SampleUseBeforeLeave() {
  const begForLife = () => console.log('please don\'t leave!');
  useBeforeLeave(begForLife);
  return (
    <div>This is nothing but a sample text.</div>
  );
}
```