import React from 'react'
import HookUseState from '../hooks/HookUseState'
import HookUseReducer from '../hooks/HookUseReducer'
import HookUseEffect from '../hooks/HookUseEffect'
import { useContext } from 'react'
import { SomeContext } from '../hooks/HookUseContext'
import HookUseRef from '../hooks/HookUseRef'
import HookUseCallBack from '../hooks/HookUseCallBack'
import HookUseMemo from '../hooks/HookUseMemo'
import HookUseLayoutEffect from '../hooks/HookUseLayoutEffect'
import HookUseImperativeHandle from '../hooks/HookUseImperativeHandle'
import HookCustom from '../hooks/HookCustom'
const Home = () => {
  const { contextValue } = useContext(SomeContext)
  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <hr />
      <h2>UseContext</h2>
      {contextValue}
      <HookUseRef />
      <HookUseCallBack />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  )
}

export default Home