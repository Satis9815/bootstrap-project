import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Subscribe = () => {
  return (
    <Container className='d-flex justify-content-center flex-column align-items-center' style={{height:'90vh',overflowY:'auto'}} >
        <Row className='py-5 py-md-0 my-5 my-md-0'>
            <h2 className='hidden py-5 py-md-0 my-5 my-md-0'></h2>
        </Row>
        <Row lg={3} xs={1} md={2} className="my-3">
            {
                new Array(3).fill("").map((item,index)=>(
                    <Col key={index} className="my-3">
                        <Card className='h-100 bt-transparent'>
                            <Card.Header className='bg-success text-white'>
                                <p>Pro Pack-रु299.00</p>

                            </Card.Header>
                            <Card.Body className='d-flex justify-content-center flex-column text-center'>
                                <Card.Text className='py-2'>
                                    <p>Join pro pack and access all the content</p>

                                </Card.Text>
                                <Card.Title >
                                रु299 only


                                </Card.Title >
                                <div className='w-100 py-2'>

                                    <Button className='w-100'  variant='secondary'>Buy Now</Button>
                                </div>
                                
                            </Card.Body>
                            <Card.Footer>
                                <p>100% REFUND AT CANCELLATION</p>
                                <small>*Terms and Conditions</small>

                            </Card.Footer>

                        </Card>
                    </Col>

                ))
            }

        </Row>

    </Container>
  )
}

export default Subscribe
