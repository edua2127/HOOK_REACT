import React, { useRef } from 'react'
import SomeComponent from '../components/SomeComponent'
const HookUseImperativeHandle = () => {
  const componentRef = useRef()


  return (
    <div>
      <hr />
      <h2>UseImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}> Validate</button>
    </div>
  )
}

export default HookUseImperativeHandle