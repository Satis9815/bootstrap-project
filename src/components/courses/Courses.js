import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import CourseCard from './CourseCard';

const Courses = () => {
    const [keyword,setKeyword] = useState();
    const [category,setCategory] = useState();

    const categories = ["web developement","Data Structure","Machine Learning","Python","Javascript","Java","Springboot","flask"];

    const addToPlayListHandler = (id)=>{
        console.log("added video with id",id);

    }

  return (
    <div>
      <Container>
        <h1 className='fs-1'>All Courses</h1>
        <div><input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}  placeholder='Search courses' className='border fs-4 my-3 w-100 px-2 rounded outline-none'/></div>
        <div>
            {
                categories.map((item,index)=>(
                    <Button key={index} value={category} className="mx-2  my-1" variant="success" onClick={()=>setCategory(item)}>{item}</Button>
                ))
            }
        </div>

      <Row xs={1} md={2} lg={3} className="my-3">
      <CourseCard title={"sample"} description="sample" imgSrc={"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"} id={1} views={23} creator="satis" lectureCount={3} addToPlayListHandler={addToPlayListHandler}/>

      <CourseCard title={"sample"} description="sample" imgSrc={"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"} id={1} views={23} creator="satis" lectureCount={3} addToPlayListHandler={addToPlayListHandler}/>

      <CourseCard title={"sample"} description="sample" imgSrc={"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg"} id={1} views={23} creator="satis" lectureCount={3} addToPlayListHandler={addToPlayListHandler}/>
      </Row>
        
      </Container>
    </div>
  )
}

export default Courses
