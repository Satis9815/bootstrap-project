import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
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
            <Card className='bg-transparent h-100'>
            <Card.Body>
            <div>
                <img src={imgSrc} alt="pic" style={{objectFit:'cover',height:'200px',width:'100%'}} />
            </div>
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Creator:{creator}</Card.Text>
                    <Card.Text>Lecture:{lectureCount}</Card.Text>
                    <Card.Text>Views:{views}</Card.Text>
                </div>
            </Card.Body>
            <div  className='ps-2 d-flex justify-content-between' >
                <Link to={`/courses/${id}`}><Button variant='outline-info'>Watch now</Button></Link>
                <div><Button variant='outline-info' onClick={()=>{addToPlayListHandler(id)}}>Add to playlist</Button></div>
            </div>
            </Card>
            
            </Col>

  );
};

export default CourseCard;
