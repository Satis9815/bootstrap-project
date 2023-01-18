import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
    const location = useLocation();
  return (
    <Row style={{boxShadow:"-2px 0 10px rgba(107,70,193,0.5)",height:'100%'}}>
      <Col md={12} >
        <LinkButton url={'dashboard'} Icon={RiDashboardFill} text={'Dashboard'} 
        active={location.pathname === '/admin/dashboard'} />
        <LinkButton url={'createcourses'} Icon={RiAddCircleFill} text={'Create Courses'}
        active={location.pathname === '/admin/createcourses'} />
        <LinkButton url={'courses'} Icon={RiEyeFill} text={'Courses'}
        active={location.pathname === '/admin/courses'} />
        <LinkButton url={'users'} Icon={RiUser3Fill} text={'Users'}
         active={location.pathname === '/admin/users'}  />
      </Col>
    </Row>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text,active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button variant={active?"success":"secondary"} className='d-flex my-2 justify-content-center align-items-center' >
        <span><Icon style={{margin:'0px'}} /></span> <p className='m-0'>{text}</p>
      </Button>
    </Link>
  );
}
