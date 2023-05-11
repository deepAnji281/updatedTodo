import React from 'react'
import '../assets/css/tododetails.css'

const TodoDetails = (props) => {
  return (
   <div className='Todo'>
     <div className='todo-details' >
        <h3>{props.val}</h3>
             <button className='edit' onClick={()=>props.onEdit(props.id)}>✍</button>
             <button className='cross' onClick={()=>props.onSelect(props.id)}>X</button>
    </div>
   </div>
  )
}

export default TodoDetails