## useConfirm & usePreventLeave

The `useConfirm` hook takes two arguments: `message` and `callback` function. The `useConfirm` function will ask the user if he or she would like to continue or not, and if he or she confirms, the callback function will be triggered. The `useConfirm` hook returns the funciton itself, so it can be put into some `onClick` property directly.

The `usePreventLeave` hook takes no argument, but returns two functions: `enablePrevent`, `disablePrevent`. The former allows you to enable to prevent the user leaving the site directly by asking a question (confirm message), and the latter disables this.

### `useConfirm` Function Code

```javascript
export const useConfirm = (message, callback, rejection) => {
  if (!callback || typeof callback !== 'function') {
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  }
  return confirmAction;
};
```

### `usePreventLeave` Function Code

```javascript
export const useConfirm = (message, callback, rejection) => {
  if (!callback || typeof callback !== 'function') {
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  }
  return confirmAction;
};
```


### Sample Componet Code

```javascript
export default function SampleUseConfirmComponent () {
  const deleteWorld = () => console.log('Deleting the world...');
  const doNotDelete = () => console.log('Delete cancelled.');
  const confirmDelete = useConfirm('Are you sure?', deleteWorld, doNotDelete);
  return (
    <>
      <div>Hi Thanos, do you want to delete the world?</div>
      <button onClick={confirmDelete}>Delete the world.</button>
    </>
  );
}
```

```javascript
export default function SampleUsePreventLeaveComponent() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </>
  );
}
```

