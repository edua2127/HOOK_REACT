import React from 'react'

import { useContext } from 'react'
import { SomeContext } from '../hooks/HookUseContext'
const About = () => {
  const { contextValue } = useContext(SomeContext)
  return (
    <div>
      <h1>About</h1>
      <h2>UseContext</h2>
      <p>{contextValue}</p>
    </div>
  )
}

export default About