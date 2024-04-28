import { useEffect, useState } from "react";

export default function Tab({
    setSelectedTab,
    selectedTab
}) {
  let tabs = [
    {
      label: "JSON to CSV",
      key: "json"
    },
    {
      label: "CSV to JSON",
      key: "csv"
    },
  ];

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <div role="tablist" className="tabs tabs-boxed w-[50%] text-center items-center m-auto">
        {tabs.map(tab => (
            <a 
              key={tab.key} 
              role="tab" 
              className={selectedTab === tab.key ? 'tab tab-active' : 'tab'}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.label}
            </a>
        ))}
    </div>
  );
}
