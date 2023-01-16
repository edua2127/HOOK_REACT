import React from 'react'
const HookUseReducer = () => {

  const [item, setItem] = React.useState('')
  const [number, dispatch] = React.useReducer((state, action) => {
    return state + action.payload
  }, 0)

  const add = () => {
    dispatch({ payload: 1 })
  }

  const initialStatelist = [
    { id: 1, name: 'Fernando' },
    { id: 2, name: 'Juan' },
  ]

  const listReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newItem = {
          id: Math.random(),
          name: action.payload.name
        }
        setItem('')
        return [...state, newItem]
      case 'DELETE_ITEM':
        return state.filter((item) => item.id !== action.payload.id)
      default:
        return state
    }
  }
  const [lista, dispatchList] = React.useReducer(listReducer, initialStatelist)



  const handleAddItem = (e) => {
    e.preventDefault()
    dispatchList({ type: 'ADD_ITEM', payload: { name: item } })
  }

  const handleDeleteItem = (id) => {
    dispatchList({ type: 'DELETE_ITEM', payload: { id } })
  }
  return (
    <div>
      <hr />
      <h2>UseReducer</h2>

      <h2>{number}</h2>
      <button onClick={add}>Add</button>
      <hr />
      <form>
        <label>
          <span>Novo item:</span>
          <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
        </label>
        <button type="submit" onClick={handleAddItem}>Adicionar</button>
      </form>
      <h3>Lista com useReducer: </h3>
      {lista && lista.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default HookUseReducer