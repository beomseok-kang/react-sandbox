import React, { useState } from 'react';

/**
 * useInput will take one initialValue.
 * useInput will return the value of the input.
 */


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

export default function SampleUseInputComponent() {
  const validator = (value) => {
    return value.length < 10;
  }
  const name = useInput('Mr. ', validator);

  return <input placeholder="Name" {...name}/>;
}

