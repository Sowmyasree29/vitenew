



import React from 'react'

function Mainheading() {
    console.log("main heading is called")
  return (
    <div>
      <h2>main heading</h2>
    </div>
  )
}

export default React.memo(Mainheading)
