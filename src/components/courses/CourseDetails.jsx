import { Container, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import introVid from '../../assets/videos/intro.mp4';

const CourseDetails = () => {
    const [lectureNumber,setLectureNumber] = useState(0);

    const lectures =[
        {
            _id:"smpleId",
            title:"Sample title here1 ",
            description:"Sample description",
            video:{
                url:"sadkj"
            }
        },
        {
          _id:"smpleId",
          title:"Sample title here 2",
          description:"Sample description",
          video:{
              url:"sadkj"
          }
      },
      {
        _id:"smpleId",
        title:"Sample title here3 ",
        description:"Sample description",
        video:{
            url:"sadkj"
        }
    },
    ]
  return (
   <>
    <Container>
      <Row>
        <Row>
          <Col md={8}>
            <div>
              <video src={introVid} width={'100%'} controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback></video>
            </div>
            <div>
                <p><b>{`#${lectureNumber+1} ${lectures[lectureNumber].title}`}</b></p>
            </div>
            <div>
              <p><b>Description</b></p>
                <p><small>{` ${lectures[lectureNumber].description}`}</small></p>
            </div>
          </Col>
          <Col md={4}>
            {
              lectures.map((item,index)=>(
                <button onClick={e=>setLectureNumber(index)}
                key={item._id} style={{width:'100%',padding:'1rem',textAlign:'center',margin:'0',borderBottom:'1px solid rgba(128,128,128,0.2)'}}>
                  <p><div id={index+1}></div> {item.title}</p>
                </button>
              ))
            }
          </Col>
        </Row>
      </Row>
    </Container>
   </>
  );
};

export default CourseDetails;
