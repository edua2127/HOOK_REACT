import React, { useState, useEffect, useMemo } from 'react'

const HookUseMemo = () => {
  const [number, setNumber] = useState(0)

  const vipNumbers = useMemo(() => {
    return ['0', '100', '200']
  }, [])

  useEffect(() => {
    console.log("nubmeros vips foram alterados")
  }, [vipNumbers])
  return (
    <div>
      <hr />
      <h2>HookUseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} />
      <p>{vipNumbers.includes(number) ? <p> acertou o numero </p> : <p> errou o numero</p>}</p>
    </div>
  )
}

export default HookUseMemo