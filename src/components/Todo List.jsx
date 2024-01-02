import React, { useState } from 'react'

const Todo = () => {
  const getTodos = () => {
    let todos = JSON.parse(localStorage.getItem('todo')) || [];
    return todos;
  }
  
  const [todos,setTodos] = useState(getTodos);

  saveTodo();
  console.log(todos);
  // add todos
  const Add = ()=> {
    let todo = document.querySelector('.todo');
    let date = document.querySelector('.date');
    todo.value && setTodos([...todos,{todo: todo.value, date: date.value, id: todos.length, checked: false}]);
    todo.value = null;
    date.value = null;
  }

  // checks done todo
  const check = (id)=> {
    const todosCopy = todos.map((todo)=> {
      if(todo.id === id) {
        return todo = todo.checked ? {...todo, checked: false} : {...todo, checked: true};
      } else {
        return todo;
      }
    })
    setTodos(todosCopy);
  }

  // clear todo
  const clear = (id)=> {
    const todosCopy = todos.filter((todo)=> todo.id !== id);
    setTodos(todosCopy);
  }

  // clear checked todos
  const clearChecked = ()=> {
    const todosCopy = todos.filter((todo)=> !todo.checked);
    setTodos(todosCopy);
  }

  // a component to update checked list items
  const TodoItem = ({todo}) => {

    return todo.checked ? 
    <>
    <div className='todo-todo'>
      <input className='check' type="checkbox" onChange={()=> check(todo.id)} checked/>
      <s>{todo.todo}</s>
    </div>
      <b className='todo-date'>{todo.date}</b>
    </> : 
    <>
    <div className='todo-todo'>
      <input className='check' type="checkbox" onChange={()=> check(todo.id)}/>
      {todo.todo}
    </div>
      <b className='todo-date'>{todo.date}</b>
    </>;
  }

  function saveTodo () {
    localStorage.setItem('todo', JSON.stringify(todos));
  }

  return (
    <div className='list'>
      <h2>Todo list</h2>
      <div className='todo-list'>
      <input type="text" className='todo'/>
      <input type="date" className='date'/>
      <button onClick={Add} className='add'>Add</button>
      </div>
        {
          todos.map((todo,i)=> {
            return <div key={i} className='todo-container'>
              <TodoItem todo = {todo}/>
              <button onClick={()=> clear(todo.id)}>clear</button>
            </div>
          })
        }
        <button onClick={clearChecked}>Clear checked</button>
      </div>
  )
}

export default Todo