import React, { createContext, useEffect, useState } from 'react'


export let counterContext = createContext()

export default function MaiContext({ children }) {


  // lets make state for testing
  // let [count, setCount] = useState(1)
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem("CARTSS")) ?? [])

  let obj = {
    // count, setCount,
    cart, setCart
  }

  useEffect(() => {
    // console.log(cart)
    localStorage.setItem("CARTSS", JSON.stringify(cart))
  }, [cart])


  return (
    <counterContext.Provider value={obj}>
      {children}
    </counterContext.Provider>
  )
}
