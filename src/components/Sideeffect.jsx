import { useEffect, useState } from "react"

const Sideeffect = () => {
  const [value,setValue] = useState(0)

  //1. it runs all the functions inside every time its rendered\
  //2. Anytime we do side effect
  //3. cannot put useEffect inside conditional statement has to put condition in useEffect function
  //4. Deependency list
  useEffect(()=> {
    if(value > 2) {
      console.log('calls function inside the useEffect hook when first rendered');
      document.title = `zakkas (${value})`;
    }
  },[value]) // this empty array is dependency. if the value inside the array changes then the funtion will run, vice varsa
  return (
    <>
      <h1>{value}</h1>
      <button onClick={()=> setValue(value + 1)}>+</button>
    </>
  )
}

export default Sideeffect