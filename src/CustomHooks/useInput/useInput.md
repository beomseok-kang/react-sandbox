## useInput

You can use two arguments in useInput: `initialValue` and `validator` function. The `initialValue` is the `initialValue` that will be put into the `input` tag, and the `validator` function would be the function that validates the input value before it is being changed. By using `validator` function you will be able to restrict the input type or not.

### `useInput` Function Code

```javascript
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const { value } = event.target;
    let willUpdate = true;
    if(typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  }
  return { value, onChange };
};
```

### Sample Component Code

```javascript
export default function SampleUseInputComponent() {
  const validator = (value) => {
    return value.length < 10;
  }
  const name = useInput('Mr. ', validator);

  return <input placeholder="Name" {...name}/>;
}
```