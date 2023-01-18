import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import cursor from '../../../assets/images/learning.jpg'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <Container>
        
    <Row className='my-3' style={{cursor:`url(${cursor}),default`,height:'90vh'}}>
        <Col md={10}>
          <div><p className='text-center'>Last changes in {String(new Date()).split("G")[0]}</p></div>
          <div><h1 ><b> Dashboard</b></h1></div>
          <Row className='d-flex justify-content-between'>
            <DataBox title={"views"} qty={123} qtyPercentage={30} profit={true} />
            <DataBox title={"Users"} qty={123} qtyPercentage={30} profit={true} />
            <DataBox title={"Subscription"} qty={123} qtyPercentage={30} profit={true} />
          </Row >

          <div style={{boxShadow:"-2px 0 10px rgba(107,70,193,0.5)"}} className="my-4 ">
            <div className='p-3'><h1 className='fs-4 fw-semiibold'>Viws Graph </h1></div>

          </div>

          <Row className='mb-3'>

            <div className='mb-4 fs-4 fw-bold'>
              <h1>Progress Bar</h1>
            </div>
            <Col md={7}>
              <div>
                <div className='fs-4 fw-semibold'>Views</div>
               <div className='d-flex justify-content-between'> <span>0%</span>
                <span>100%</span></div>
              <div style={{height:'5px',width:'100%',backgroundColor:"gray"}}>
                <div style={{height:'100%',width:'70%',backgroundColor:'green'}}>
               
                </div>
                
                
              </div>

              </div>
              <div>
                <div className='fs-4 fw-semibold'>User</div>
               <div className='d-flex justify-content-between'> <span>0%</span>
                <span>100%</span></div>
              <div style={{height:'5px',width:'100%',backgroundColor:"gray"}}>
                <div style={{height:'100%',width:'90%',backgroundColor:'green'}}>
               
                </div>
                
                
              </div>

              </div>
              <div>
                <div className='fs-4 fw-semibold'>Subscription</div>
               <div className='d-flex justify-content-between'> <span>0%</span>
                <span>100%</span></div>
              <div style={{height:'5px',width:'100%',backgroundColor:"gray"}}>
                <div style={{height:'100%',width:'40%',backgroundColor:'green'}}>
               
                </div>
                
                
              </div>

              </div>
            </Col>
            <Col md={5}>
              <div>
                <div><h1 className='text-center fs-4 fw-semibold'>Users</h1></div>
              </div>
            </Col>
            
          </Row>
        </Col>
        <Col md={2}>
            
            <Sidebar/>
        </Col>
    </Row>
    </Container>

  )
}

export default Dashboard

function DataBox({title,qty,qtyPercentage,profit}){
    return (
    <Col md={3} className="my-3 mx-2" style={{boxShadow:"-2px 0 10px rgba(107,70,193,0.5)"}}>
        <div className='p-md-3 p-2'>
        <div><h1 className='fs-4 fw-semibold'>{title}</h1></div>
        <div className='d-flex align-items-center fs-5'>
            <p>{qtyPercentage}%</p>
            <span>{profit ? <RiArrowUpLine color='green'/>:(<RiArrowDownLine color='red'/>)}</span>
        </div>
        <small className='text-muted'>since last month</small>
        </div>
    </Col>
    )
}
