import { Image, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../assets/images/learning.jpg';
import Sidebar from '../Dashboard/Sidebar';
import AdminCoursDetailsModal from './AdminCoursDetailsModal';

const AdminCourses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const courses = [
    {
      _id: 'lasjdasjlf',
      poster: {
        url:"https://m.media-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg"
      },
      title: 'React Course',
      category: 'web dev',
      createdBy:'satis',
      views:12,
      numOfVideos:12,

    },
  ];

  const viewLectureDetailsHandler =( id )=> {
    onOpen();
    console.log('Updating the user with id', id);
  };

  const deleteHandler = (id) => {
    console.log('Deleting the user with id ', id);
  };
  const deleteLectureButtonHandler =(courseId,lectureId)=>{
    console.log("Deletted the course")
  }

  const addLectureButton =(e,courseId,title,description,video)=>{
    e.prevenDefault();
    console.log("add lecture button clicked")
  }
  return (
    <Container>
      <Row
        className="my-3"
        style={{ cursor: `url(${cursor}),default`, height: '90vh' }}
      >
        <Col md={10} style={{overflowX:'auto'}}>
          <Table >
           
            <Thead>
              <Tr>
                <Th>#id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Actions</Th>

              </Tr>
            </Thead>
            <Tbody>
              {courses.map((item, index) => (
                <Tr key={item._id}>
                  <Td>#{item._id}</Td>
                  <Td><Image src={item.poster.url}/></Td>
                  <Td>{item.title}</Td>
                  <Td>{item.category}</Td>
                  <Td>{item.createdBy}</Td>
                  <Td isNumeric>{item.views}</Td>
                  <Td isNumeric>{item.numOfVideos}</Td>

                  <Td isNumeric p={"0"}>
                    <div>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          viewLectureDetailsHandler(item._id);
                        }}
                      >
                        view lecture
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          deleteHandler(item._id);
                        }}
                        className="ps-2"
                      >
                        <RiDeleteBin7Fill />
                      </Button>
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <AdminCoursDetailsModal isOpen={isOpen} onClose={onClose} id={"123"} courseTitle={"react intern"} deleteLectureButtonHandler={deleteLectureButtonHandler} addLectureButton={addLectureButton} lectures={[]}/>
        </Col>
        <Col md={2}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};


export default AdminCourses
