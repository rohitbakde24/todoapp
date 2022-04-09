import { BsTrash } from "react-icons/bs";
import React, { useState } from 'react';
import pencil from './images/pencil.png';
import './AddData.css';


const AddData = () => {
    const [data,newData]= useState('');

    const[allEntry, newAllEntry] = useState([]);

    const FormSubmit =(e)=>{
        e.preventDefault();

        if (data){
            const newEntry = {id: new Date().getTime().toString(),data}
            newAllEntry([...allEntry,newEntry])
            console.log(allEntry)
        }else(
            alert("please add something")
        )
        newData("")
    }

    //remove current element or list
    const DeleteItem = (index) =>{
        const updatedItems = allEntry.filter((element)=>{
            return element.id !== index
        })
        newAllEntry(updatedItems)
    }
    
    const RemoveAll = () =>{
             newAllEntry([])
            
        }
  return (
    <>
    <div className='bg'>
        
        <img src={pencil} className="pen" />
        <h2>To Do List</h2>
        <div>
            <form action='' onSubmit={FormSubmit}>
                <div>
                    <span className='icon'>✍️</span>
                        <input 
                            type="text"
                            value={data} 
                            name="data" 
                            id="password" 
                            autoComplete="off" 
                            onChange={(e)=>{newData(e.target.value)}}
                            className="myinput">
                        </input>
                    <button type='submit' className='plus'><span>&#43;</span></button>
                </div>
            </form>
            {
                allEntry.map((value)=>{
                    const {id,data} = value
                    return(
                        <>   
                        <div key={id}>
                            <div className='center'>
                                <div className='result'>
                                    {data}   
                                </div>
                                <div className="trash">
                                   <button className="trash-btn" onClick={()=>{DeleteItem(value.id)}}><BsTrash/></button>
                                </div>     
                            </div>
                        </div>
                        </>
                    )
                })
            }
            <div>
                <button className="remove" onClick={ RemoveAll}>clear list</button>
            </div>
                        
            
        </div>
    </div>
    </>
  )
}

export default AddData;