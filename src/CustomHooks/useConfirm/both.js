import React from 'react';
import SampleUseConfirmComponent from './useConfirm';
import SampleUsePreventLeaveComponent from './usePreventLeave';

export default function SampleUseConfirmAndUsePreventLeaveComponent() {
  return (
    <>
      <div>
        <SampleUseConfirmComponent />
      </div>
      <div>
        <SampleUsePreventLeaveComponent />
      </div>
    </>
  );
}