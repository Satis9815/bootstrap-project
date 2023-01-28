import { Button, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const CourseCard = ({
    id,
  views,
  title,
  imgSrc,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
}) => {

    
  return (
            <Col className='my-md-2 my-3'>
            <Card className='bg-transparent h-100 rounded-0 p-3 cardStyle' >
            <div>
                <img src={imgSrc} alt="pic" style={{objectFit:'cover',height:'200px',width:'100%'}} />
            </div>
            <Card.Body className=''>
           
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Creator:{creator}</Card.Text>
                    <Card.Text>Lecture:{lectureCount}</Card.Text>
                    <Card.Text>Views:{views}</Card.Text>
                </div>
            </Card.Body>
            <HStack  justifyContent={"space-between"}>
            <Link to={`/courses/${id}`}><Button colorScheme={"yellow"}>Watch now</Button></Link>
                <Button variant={"ghost"} colorScheme={"yellow"} onClick={()=>{addToPlayListHandler(id)}}>Add to playlist</Button>
            </HStack>
            </Card>
            
            </Col>

  );
};

export default CourseCard;
