import React from 'react'

const TabOptions = ({activeTab, setActiveTab}) => {
  return (
    <div>
      <button onClick={setActiveTab("NightLife")}></button>
    </div>
  )
}

export default TabOptions