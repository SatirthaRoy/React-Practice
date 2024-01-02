
import {Practice} from "./components/Practice";
import Todo from "./components/Todo List";
import { createContext, useState } from "react";
import '../src/css/todolist.css'

const Checkbox = () => {
  let [checked, setChecked] = useState(false);
  return <>
    <input type="checkbox" onClick={() => {
      setChecked(checked = checked ? false : true); 
    }}/>
    show practice
    {checked && <Practice/>}
    
  </>

}

export const data = createContext();
export const data1 = createContext();

export function App() {

  let name = 'himu';
  let age = 21;

  return (
    <>
    
    <Todo/>
    <br></br>
    <Checkbox/>
    </>
  )
}

export default App;

