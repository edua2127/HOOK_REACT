import React, { useEffect, useState } from 'react'
const HookUseEffect = () => {

  /*
    useEffect sem dependicias:
    -executa o useEffect todavez que o
    componente é re-renderizado.
  */
  useEffect(() => {
    console.log("executa quando re-renderizado o componente!")
  })

  const [exemplo, setExemplo] = useState(0)

  /*
    useEffect com dependecias:
    -executa a funçào quando o state é modificado
  */
  useEffect(() => {
    console.log("o valor da variavel exemplo foi alterado para: ", exemplo)
  }, [exemplo])

  /*
    useEffect com array de dependencias vazio:
    -executa só uma vez quando a pagina é renderizada
  */
  useEffect(() => {
    console.log("essa função só vai ser executada uma vez")
  }, [])


  //cleanup do useEffect
  useEffect(() => {
    // const time = setTimeout(() => {
    //   console.log("fica executando quando se muda de pagina")
    // }, 2000)
    // //setExemplo(exemplo + 1)
    // return () => clearTimeout(time)
  }, [exemplo])
  return (
    <div>
      <hr />
      <h2>UseEffect</h2>
      <button onClick={() => setExemplo(exemplo + 1)}>mudar valor</button>
    </div>
  )
}

export default HookUseEffect