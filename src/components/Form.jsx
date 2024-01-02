import { useState} from "react"

const Form = () => {

  const [username, setUsername] = useState('');

  const handleSubmit = (event)=> {
    alert(`you typed: ${username}`);
    setUsername('');
  }

  const handleChange = (event) => {
    setUsername(event.target.value);
  }

  return <>
    <h2>Form</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleChange}/>
      <button>Submit</button>
    </form>
    <p></p>
  </>
}

export default Form