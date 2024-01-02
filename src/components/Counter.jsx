import { useState } from "react"

const Counter = () => {
  const [count,setCount] = useState(0);

  const increment = ()=> setCount(count+1);
  const decrement = ()=> setCount(count-1);
  const reset = ()=> setCount(0);
  return (
    <>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter