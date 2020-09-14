import React from 'react';

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