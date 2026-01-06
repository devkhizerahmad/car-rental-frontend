import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/Todo/todoSlice'


function AddTodo() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    //use reducer function
    dispatch(addTodo(inputValue))
    setInputValue("");
  }
  return (
<form action="" onSubmit={addTodoHandler } >
      <input 
      className='text-black border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 rounded-lg outline-none px-3 py-2 ease-in-out'
      type="text" 
      placeholder='Enter todo....'
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button type='submit' >Add</button>
    </form>  )
}

export default AddTodo