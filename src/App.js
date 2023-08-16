import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';

function App() {
  const [listTodo,setListTodo]=useState([]);   //  using states for tasks
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];    // using spread operator to copy the content from one list to another
    newListTodo.splice(key,1)           //deleting the key 
    setListTodo([...newListTodo])       //copying the new list to original one
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>  
        <h1 className="app-heading">TODO LIST</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{    
          return (
         <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/> //item={listitem} for adding ,key={i} used for uniqueness 
         )                                                                        // deleteitem for deleting
        })}
      </div>
    </div>
  )
}

export default App