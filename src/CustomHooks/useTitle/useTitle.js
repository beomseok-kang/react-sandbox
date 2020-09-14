import React, { useState, useEffect } from 'react';
import { useInput } from "../useInput/useInput";

export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function SampleUseTitleComponent() {
  const titleUpdater = useTitle('Beom Seok React Sandbox');
  const title = useInput('');
  const onSubmit = (event) => {
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