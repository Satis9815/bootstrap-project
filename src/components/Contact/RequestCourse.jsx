
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const RequestCourse = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [course,setCourse] =useState('');
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'90vh'}}>
        <h1 className='text-center fs-1 fw-semibold'>Reuest new Courses</h1>
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
            <textarea name="course" id="message" className='border my-3' cols="10" rows="10" data-ms-editor="true" style={{height:"44px"}} onChange = {e=>{setCourse(e.target.value)}} value={course}>Type About your Courses  here...</textarea>
            </div>
            <div className=' d-flex  justify-content-between align-items-center'>
                <Link><Button variant='outline-info'>Send Mail</Button></Link>
            </div>
            <div>
                Brouse new Courses ? <Link to="/courses"><kbd>Click</kbd> </Link> here
            </div>
        </div>

      </form>
    </div>

  )
}

export default RequestCourse
