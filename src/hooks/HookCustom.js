import React from 'react'
import { usePrevious } from '../customHooks/usePrevious'
import { useState } from 'react'
const HookCustom = () => {
  const [number, setNumber] = useState(0)
  const prevNumber = usePrevious(number)
  return (
    <div>
      <hr />
      <h2>UsePrevious - Custom Hook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {prevNumber}</p>
      <button onClick={() => setNumber(number + 1)}>Incrementar</button>
    </div>
  )
}

export default HookCustom