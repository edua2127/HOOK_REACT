import React from 'react'

const HookUseRef = () => {
  const number = React.useRef(0)
  const [counter, setCounter] = React.useState(0)
  const [counterB, setCounterB] = React.useState(0)

  React.useEffect(() => {
    number.current = number.current + 1
  })

  const inputRef = React.useRef()
  const [text, setText] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    inputRef.current.focus()
    setText("")
  }
  return (
    <div>
      <hr />
      {/* useRef */}
      <h2>UseRef</h2>
      <p>o componente renderizou o componente quantas vezes: {number.current}</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>contador 1</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>contador 2</button>
      {/* useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}

export default HookUseRef