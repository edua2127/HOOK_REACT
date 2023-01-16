import React from 'react'

const List = ({ getItems }) => {
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    console.log("buscando items do DB")
    setList(getItems)
  }, [getItems])

  return (
    <div>{list && list.map((item, index) => (
      <p key={index}>{item}</p>
    ))}</div>
  )
}

export default List