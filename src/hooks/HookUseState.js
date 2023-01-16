import React from 'react'
import { useState } from 'react'
const HookUseState = () => {
  let username = "johndoe"
  const [name, setName] = useState("eduardo")

  function changeName() {
    setName("Eduardo")
    username = "johndoe 2"
  }

  //useState e input
  const [age, setAge] = useState(18)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("valor do submit: ", age)
  }

  return (
    <div>
      <hr />
      <h2>UseState</h2>
      <p>Username: {username}</p>

      <p>Name: {name}</p>
      <button onClick={changeName}>Change Name</button>

      <hr />
      <form onSubmit={handleSubmit}>
        <label><span>Digite a sua Idade:</span></label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <button>Enviar</button>
      </form>
      <p>Você tem {age} anos</p>
    </div>
  )
}

export default HookUseState