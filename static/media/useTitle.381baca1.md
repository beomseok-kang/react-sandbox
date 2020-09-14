## useTitle

You can put in the `initialTitle` as an argument for `useTitle`. The `useTitle` hook will return the `setTitle` function which changes the title of the document.

### `useTitle` Function Code

```javascript
export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
};
```

### Sample Component Code

```javascript
export default function SampleUseTitleComponent() {
  const titleUpdater = useTitle('Loading...');
  const title = useInput('');
  const onSubmit = () => {
    event.preventDefault();
    titleUpdater(title.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input {...title}/>
      <button type="submit">Change Title To Above!</button>
    </form>
  );
}
```