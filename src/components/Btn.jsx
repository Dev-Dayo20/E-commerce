import React, {useState} from 'react'

function Btn() {
    const [btn, setBtn] = useState(0);
  return (
  
      <button onClick={()=>setBtn(btn+1)}>Count: {btn}</button>
   
  )
}

export default Btn
