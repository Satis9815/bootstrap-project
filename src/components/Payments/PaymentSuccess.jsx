import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container className='d-flex justify-content-center flex-column align-items-center' style={{height:'90vh',overflowY:'auto'}} >
        <Row className='py-5 py-md-0 my-5 my-md-0'>
        </Row>
        <Row className="my-3">
                    <Col  className="my-3 ">
                        <Card className='h-100 bg-transparent w-75'>
                            <Card.Header className='bg-success text-white'>
                                <p>Payment success</p>

                            </Card.Header>
                            <Card.Body className='d-flex justify-content-center flex-column text-center'>
                                <Card.Text className='py-2'>
                                    <p>Congratulatoin you're a pro member. You have access to premium content</p>

                                </Card.Text>
                                <Card.Title className='d-flex align-items-center justify-content-center'>
                               
                                    <AiFillCheckCircle className='text-success tetx-center m-0'  style={{fontSize:'70px'}}/>

                                </Card.Title >
                                <Link to="/profile" className=' py-2'>

                                    <span>Go to profile</span>

                                </Link>
                                <p><b>Reference:kashfiahdfl</b></p>
                                
                            </Card.Body>

                        </Card>
                    </Col>

        </Row>

    </Container>
  )
}

export default PaymentSuccess
