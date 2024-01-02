import { data, data1 } from "../App"
import { useContext } from "react"
export const Greetings = () => {
  const name = useContext(data);
  const age  = useContext(data1);
  return (
    <>
      <h3>Hellow im {name}. im {age} years old</h3>
    </>
  )
}
