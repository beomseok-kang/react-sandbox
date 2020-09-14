import React, { useState } from 'react';

const content = [
  {
    tab: "Section 1",
    content: "Hi, I'm the content of the section 1."
  },
  {
    tab: "Section 2",
    content: "Hi, I'm the content of the section 2."
  },
  {
    tab: "Section 3",
    content: "Hi, I'm the content of the section 3."
  },
];

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

export default function SampleUseTabsComponent() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {
        content.map((section, index) => (
          <button key={section.tab} onClick={(() => changeItem(index))}>{section.tab}</button>
        ))
      }
      <p>{currentItem.content}</p>
    </div>
  );
}