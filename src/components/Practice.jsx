import { useRef } from "react"

export const Practice = () => {
  const inputVal = useRef(null);

  const writeFuk = ()=> {
    inputVal.current.value = 'fuck you';
    inputVal.current.disabled = true;
  }
  return <>
    <h1>hellow im practice</h1>
    <input type="text" ref={inputVal}/>
    <button onClick={()=> writeFuk()}>write fuck fuck</button>
  </>
}