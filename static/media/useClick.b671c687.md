## useClick

You can put in the `onClick` function as an argument for `useClick`. The `useClick` hook will return the `element` reference and it will add an event listener to the element, and remove the event listener after the element unmounts.

By Modifying the `'click'` event to `'mouseenter'` event, an useHover hook can also be created.

### `useClick` Function Code

```javascript
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
```

### Sample Component Code

```javascript
export default function SampleUseClickComponent() {
  const clicked = () => {
    alert('clicked!');
  };
  const title = useClick(clicked);
  return (
    <h4 ref={title}>Click Me</h4>
  );
}
```
