import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { RiDeleteBin7Fill } from 'react-icons/ri'

const AdminCoursDetailsModal = ({isOpen,onClose,id,deleteLectureButtonHandler,addLectureButton,courseTitle,lectures=[]}) => {

    const  [title,setTitle] = useState("");
    const  [description,setDescription] = useState("");
    const  [video,setVideo] = useState("");
    const  [videoPrev,setVideoPrev] = useState("");


    const changeVideoHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
    
        reader.onloadend = () => {
          setVideoPrev(reader.result);
          setVideo(file);
        };
      };

      const onCloseHandler =()=>{
        setTitle("");
        setDescription("");
        setVideo();
        setVideoPrev();
        onClose();
      }

  return (
    <Modal isOpen={isOpen} size="full" onClose={onCloseHandler}  scrollBehavior="outside">
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>
                {courseTitle}
            </ModalHeader>
            <ModalCloseButton onClick={onCloseHandler}/>
            <ModalBody p={"16"}>
              <Row>
              <Col md={8}>
                    <Box px={["0","16"]}>
                        <Box my={"5"}>
                            <Heading children={courseTitle}/>
                            <Heading children={`#${id}`} size="sm" opacity={0.4}/>

                        </Box>

                        <Heading children={'Lectures'} size="lg"/>
                        <VideoCard 
                        title="React Intro"
                        description="In this video you will know the react basics"
                        num={1}
                        lectureId="askdasklecture"
                        courseId={id}
                        deleteLectureButtonHandler={deleteLectureButtonHandler}
                        addLectureButton={addLectureButton}
                        />
                         
                    </Box>

                </Col>
                <Col md={4}>
                <Box>
                        <form onSubmit={e=>addLectureButton(e,id,title,description,video)}>

                            <VStack spacing={"4"}>
                                <Heading children={"Add Lecture"} size={"md"} textTransform="uppercase"/>

                                <Input focusBorderColor='purpule.300' placeholder='Title' value={title} 
                                onChange={e=>setTitle(e.target.value)}/>
                                 <Input focusBorderColor='purpule.300' placeholder='Description' value={description} 
                                onChange={e=>setDescription(e.target.value)}/>

                                <Input accept='video/mp4' required type={"file"} focusBorderColor="purpule.300"  onChange={changeVideoHandler}/>

                                {
                                    videoPrev && (
                                        <video controls controlsList='nodownload' src={videoPrev}>

                                        </video>
                                    )
                                }

                                <Button width={"full"} colorScheme="purple" type='submit'>upload</Button>


                            </VStack>

                        </form>
                    </Box>
                </Col>
              </Row>

            </ModalBody>

            <ModalFooter>
                                <Button onClick={onCloseHandler}>Close</Button>
            </ModalFooter>


        </ModalContent>
    </Modal>
  )
}

export default AdminCoursDetailsModal


function VideoCard({title,description,num,lectureId,courseId,deleteLectureButtonHandler}){
    return (
        <Stack direction={["column","row"]} my="8" borderRadius={"lg"} 
        boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
        justifyContent={["flex-start","space-between"]}
        p={["4","8"]}
        >
            <Box>
                <Heading size={"sm"} children={`#${num} ${title}`}/>
                <Text children={description}/>
            </Box>
            <Button color={"purple.600"} onClick={()=>{deleteLectureButtonHandler(courseId,lectureId)}}>
                <RiDeleteBin7Fill/>
            </Button>
        </Stack>
    )
}
