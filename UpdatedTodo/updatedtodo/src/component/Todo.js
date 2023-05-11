import React from 'react'
import '../assets/css/todo.css'
import TodoDetails from './TodoDetails'
import { useState } from 'react'

const Todo = () => {
    const[inputItem,setInputItem]=useState('');
    const[item,setItem]=useState([]);
    const[toggle,setToggle]=useState(true);
    const[editid, setEditid]=useState(null);
    const handleChange=(e)=>{
        
        setInputItem(e.target.value);

    }
    const addItem=()=>{
        if(!inputItem)
        {

        }
        else if(inputItem && !toggle){
            setItem(item.map((ele)=>{
                if(ele.id===editid)
                {
                    return {...ele,name:inputItem}
                }
                return ele;
            }))
                
           
           setInputItem('');
           setToggle(true)
           setEditid(null);


           
        }
        else{
            const allInputData={id:new Date().getTime().toString(),name:inputItem};
            setItem([...item,allInputData])
        }
        setInputItem('');

        
        
        
    }
    const deleteItems=(id)=>{
        const updateItem=item.filter((ele)=>{
            return ele.id!==id
            
        })
        setItem(updateItem);
      
        
    }
    const editItem=(id)=>{
        const newEdit=item.find((ele)=>{
            return ele.id===id;
        })
        setInputItem(newEdit.name);
        setEditid(id);
        setToggle(false)
        
    }

  return (
    <div className='todo-template'>
    <div className='todo'>
        <div className='input-and-add-btn'>
           
            <input type='text' placeholder='add your item ....' onChange={handleChange} value={inputItem}/>
            {
                toggle?<button onClick={addItem} title='add item'>+</button>:<button title='update-item' onClick={addItem}>✍</button>
            }
        </div>
    </div>

    <div className='details-list'>
        <div className='each-item'>
            <div className='each-item-btn'>
            {
                item.map((val)=>{
                    
                    return  <TodoDetails key={val.id} val={val.name} id={val.id} onSelect={deleteItems} onEdit={editItem}/> 
                })
            }
             

            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Todo
