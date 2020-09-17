## useClickOutside

You can put in `initialIsVisible` as an argument, and the custom hook will add a event listener to the document, and if the client's click does not contain the `ref` component, the `isVisible` will change to false and the pop up will become invisible. The hook returns `ref`, `isVisible`, `setIsVisible`.

### `useClickOutside` Function Code

```javascript
export const useClickOutside = (initialIsVisible) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
};
```

### Sample Component Code

```javascript
export default function SampleUseClickOutsideComponent() {
  const { ref, isVisible, setIsVisible } = useClickOutside(false);
  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <button onClick={onClick}>Show Pop Up</button>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.7)",
          position: "fixed",
          top: 0,
          left: 0,
          display: isVisible ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 200,
            height: 150,
            background: "white",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={ref}
        >
          NEW POP UP!
        </div>
      </div>
    </div>
  );
}
```