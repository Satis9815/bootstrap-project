import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cursor from '../../../assets/images/learning.jpg'
import Sidebar from '../Dashboard/Sidebar'

const AdminCourses = () => {
  return (
    <Container>
        
    <Row className='my-3' style={{cursor:`url(${cursor}),default`,height:'90vh'}}>
        <Col md={10}>
        AdminCourses
        </Col>
        <Col md={2}>
            
            <Sidebar/>
        </Col>
    </Row>
    </Container>

  )
}


export default AdminCourses
