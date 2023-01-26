
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] =useState('Type your message here...');
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'90vh'}}>
        <h1 className='text-center fs-1 fw-semibold'>Contact Us</h1>
      <form >

        <div>
            <div className='d-flex flex-column '>
            <label>Name</label>
            <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name}  placeholder='Enter your Name' className='border rounded p-2'/>
            </div>
            <div  className='d-flex flex-column'>
            <label>Email</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}  placeholder='Enter your Email' className='border rounded p-2'/>
            </div>
            <div  className='d-flex flex-column'>
            <textarea name="message" id="message" className='border my-3' cols="10" rows="10" data-ms-editor="true" style={{height:"44px"}} onChange = {e=>{setMessage(e.target.value)}} value={message}>Type your message here...</textarea>
            </div>
            <div className=' d-flex  justify-content-between align-items-center'>
                <Link><Button variant='outline-info'>Send Mail</Button></Link>
            </div>
            <div>
                New request ? <Link to="/reqcourse"><kbd>Click</kbd> </Link> here
            </div>
        </div>

      </form>
    </div>

  )
} 
export default Contact
