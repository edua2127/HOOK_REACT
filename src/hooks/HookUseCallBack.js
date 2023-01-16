import React from 'react'
import List from "../components/List"
const HookUseCallBack = () => {
  const [counter, setCounter] = React.useState(0)

  const getItemsFromDataBase = React.useCallback(() => {
    return ['a', 'b', 'c', 'd', 'e']
  }, [])
  return (
    <div>
      <hr />
      <h2>HookUseCallBack</h2>
      <List getItems={getItemsFromDataBase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
    </div>
  )
}

export default HookUseCallBack