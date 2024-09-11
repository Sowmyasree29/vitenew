

import UseCallback from './useCallback'


import React from 'react'

function CustomButton({text,onPress}) {
    console.log("children rendering")
  return (
    <div>
     <button onClick={onPress}>{text}</button> 
    </div>
  )
}

export default React.memo(CustomButton)
