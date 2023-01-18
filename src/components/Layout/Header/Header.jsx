import React from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
const Header = () => {
    const isAuthenticated = false;
    const user ={
        role:"admin"
    }

    const logoutHandler = () =>{
        console.log("logout")
    }
  return (
    <section>

        <Navbar bg="primary " expand="lg">
      <Container className='d-flex align-items-end'>
        <Navbar.Brand href="#home" className='text-white'>Free Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="d-flex  justify-content-between  align-items-center ">
            <Link to="/" className='text-white'>Home</Link>
          <Link to="/courses" className='text-white'>Brouse All Coureses</Link>
            <Link to="/reqcourse" className='text-white'>Request a Coureses</Link>
            <Link to="/contact" className='text-white'>Contact</Link>
            <Link to="/about" className='text-white'>About</Link>
            
            {
                isAuthenticated ? (<>
                <Link to="/profile">
                <div className='mx-2'><Button variant="outline-info text-white">Profile</Button></div>
                </Link>
               
                <Button variant="outline-info text-white" onClick={logoutHandler}>Logout</Button>
               
                {
                    user && user.role ==="admin" && (
                        <Link to="/admin/dashboard">
                        <div className='mx-2'> <Button variant="outline-info text-white">Dashboard</Button></div>
                        </Link>

                    )
                }


                </>) : (<>
                    <Link to="/login">
                <div className='mx-2'><Button variant="outline-info text-white">Login</Button></div>
                </Link>
                <Link to="/signup">
                <div><Button variant="outline-info text-white">Signup</Button></div>
                </Link>
                </>)
            }
            <div><ColorModeSwitcher/></div>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}

export default Header
