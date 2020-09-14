## useTabs

You can use two arguments in `useTabs`: `initialTab` (initial tab index), and `allTabs` (the contents in the tabs). If `allTabs` is empty or is not an array, it will return nothing, and if not, it will return `currentItem` (at `currentIndex`), and the `changeItem` function.

### `useTabs` Function Code

```javascript
export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
}
```

### Sample Component Code

```javascript
export default function SampleUseTabsComponent() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {
        content.map((section, index) => (
          <button onClick={(() => changeItem(index))}>{section.tab}</button>
        ))
      }
      <p>{currentItem.content}</p>
    </div>
  );
}
```