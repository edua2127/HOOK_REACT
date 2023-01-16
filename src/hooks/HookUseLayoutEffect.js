import React, { useState, useEffect, useLayoutEffect } from 'react'
const HookUseLayoutEffect = () => {
  const [name, setName] = useState('John')

  useEffect(() => {
    console.log("2")
    setName('nome 2')
  }, [])

  useLayoutEffect(() => {
    console.log("1")
    setName('nome 1')
  }, [])

  console.log(name)
  return (
    <div>
      <hr />
      <h2>UseLayoutEffect</h2>
      <p>Nome:{name}</p>
    </div>
  )
}

export default HookUseLayoutEffect