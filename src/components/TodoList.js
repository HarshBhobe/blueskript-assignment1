import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" //delete icon from bootstrap
        onClick={e=>{
            props.deleteItem(props.index)                 //onclick itemsdeleted
        }}></i>
        </span>
    </li>
  )
}

export default Todolist