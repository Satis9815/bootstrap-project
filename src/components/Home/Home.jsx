import React, { useEffect, useRef } from 'react';
import { Col, Container,} from 'react-bootstrap';
import heroImg from '../../../src/assets/images/home.jpg';
import './Home.css';
import { Button, Heading, HStack, Text } from '@chakra-ui/react';
import CourseCard from '../courses/CourseCard';
import Typed from "typed.js";
const Home = () => {
    const addToPlayListHandler = ()=>{
        console.log("Clicked")
    }
    const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings:[ "DSA","Python","Javascript","Java","Reactjs"], 
        startDelay: 300,
        backSpeed:30,
      backDelay:900,
      typeSpeed:50,
      loop:true,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <>
      <div className='d-flex'>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-start px-md-5 px-3 my-md0 my-5 py-md-0 py-5"
            // style={{ padding: '0 3rem' }}
          >
            <HStack>
              <Heading children={'Welcome to '} />
              <Heading
                color={'yellow.300'}
                children={'freecourse'}
                textTransform={'uppercase'}
              />
            </HStack>
            <HStack>
              <Text fontWeight={"bold"} fontSize={"25"}>Learn</Text>
              <Text ref={el} fontSize={"25"} color={"yellow.300"}></Text>
              {/* <span ref={el}></span> */}
           
            </HStack>
            <Text py={"2"} fontSize={"md"} children={"Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! FreeCourse is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn."}/>
            
              <Button my={"2"} colorScheme={"yellow"}>Browse Courses</Button>
           
          </Col>
          <Col md={6} className="mt-5 d-md-block d-none p-0">
            <div className="py-4">
              <img
                src={heroImg}
                alt="pic"
                className="heroImg"
                height="300px"
                width="100%"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>

          </div>

      <Container>
        <Heading textAlign={"center"} children="Recommended Courses" fontSize={"2xl"}/>
      <div xs={1} md={2} lg={3} className="my-3 row g-5">
      <CourseCard title={"sample"} description="sample" imgSrc={"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"} id={1} views={23} creator="satis" lectureCount={3} addToPlayListHandler={addToPlayListHandler}/>

     <CourseCard title={"sample"} description="sample" imgSrc={"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"} id={1} views={23} creator="satis" lectureCount={3} addToPlayListHandler={addToPlayListHandler}/>

     <CourseCard title={"sample"} description="sample" imgSrc={"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"} id={1} views={23} creator="satis" lectureCount={3} addToPlayListHandler={addToPlayListHandler}/>
     </div>
      </Container>
      
    </>
  );
};

export default Home;
