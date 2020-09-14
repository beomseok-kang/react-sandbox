## useFadeIn

The `useFadeIn` hook takes two arguments: `duration` and `delay`. Each are put into the transition property (of css) in the element, and returns property object for the component, the `ref` and `style`.

### `useFadeIn` Function Code

```javascript
export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== 'number' || typeof delay !== 'number') {
    return;
  }
  return {
    ref: element,
    style: {
      opacity: 0
    }
  };
};
```

### Sample Component Code

```javascript
export default function SampleUseFadeInComponent() {
  const fadeInH4 = useFadeIn(5, 2);
  const fadeInP = useFadeIn(5, 6);
  return (
    <>
      <h4 {...fadeInH4}>Fades in.</h4>
      <p {...fadeInP}>Lorem Imsum is a sample text.</p>
    </>
  );
}
```