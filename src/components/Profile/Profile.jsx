import { Avatar, Button, Container, HStack, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProfilePicture } from '../../redux/actions/profileAction';
import { getMyProfile } from '../../redux/actions/userAction';
import ChangePhoto from './ChangePhoto';

const Profile = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const removeFromPlaylistHandler = (id)=>{
        console.log("removed");
    }

    const dispatch = useDispatch();
    const {loading,message,error}= useSelector(state=>state.profile);

    const chnageImageSubmitHandler = async(e,image)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.append("file",image);
  
      await  dispatch(updateProfilePicture(myForm));
      dispatch(getMyProfile());

    }

    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:"clearError"})
      }
  
      if(message){
        toast.success(message);
        dispatch({type:"clearMessage"})
      }
  
    },[dispatch,message,error])

  return (
    <Container minH={"90vh"} >
      
          <Stack justifyContent={'flex-start'} direction={["column","row"] } 
          padding="8">

              <VStack>
                {' '}
                <Avatar boxSize={'48'} src={user.avatar.url}/>
             
                  {/* <Button onClick={onOpen} variant="secondary">Change Photo</Button> */}
                  <Button isLoading={loading} colorScheme={'yellow'} variant="ghost" onClick={onOpen} >Change photo</Button>
               
              </VStack>
    
            <VStack spacing={"4"} alignItems={["center","flex-start"]}>
              <HStack>
                <Text children="Name:" fontWeight={'bold'}/>
                <Text children={user.name}/>
              </HStack>
              {/* <p>Name:{user.name}</p> */}
              {/* <p>Email:{user.email}</p> */}
              <HStack>
                <Text children="Email:" fontWeight={'bold'}/>
                <Text children={user.email}/>
              </HStack>
              {/* <p>createdAt:{user.createdAt.split('T')[0]}</p> */}
              <HStack>
                <Text children="createdAt:" fontWeight={'bold'}/>
                <Text children={user.createdAt.split('T')[0]}/>
              </HStack>
              
              {user.role !== 'admin' && (
                <HStack>
                  <Text children="Subscription" fontWeight={"bold"}/>
                  { user.subscription && user.subscription.status === 'active' ? (
                    <>
                      <Button color={'yellow.500'} variant="unstyled">Cancel subscription</Button>
                    </>
                  ) : (
                    <>
                      <Link to="/subscribe">
                        {/* <Button variant="secondary">subscribe</Button> */}
                        <Button colorScheme={'yellow'}>Subscribe</Button>
                      </Link>
                    </>
                  )}{' '}
                </HStack>
              )}
              <Stack direction={["column","row"]} alignItems={"center"}>
                <Link to="/changeprofile">
                  <Button >Change profile</Button>
                </Link>
                <Link to="/updatepassword">
                  <Button >
                    updatepassword
                  </Button>
                </Link>
              </Stack>
            </VStack>
          </Stack>

          <div>
            <h1>Your Playlist </h1>
          </div>
          <div>
            {user.playlist.length > 0 && (
              <Row lg={3} md={2} xs={1}>
                {user.playlist.map((item, index) => (
                  <Col key={index} className="my-3">
                    <Card className="bg-transparent h-100">
                      <Card.Body>
                        <div>
                          <img
                            src={item.poster}
                            alt="pic"
                            style={{
                              objectFit: 'cover',
                              height: '200px',
                              width: '100%',
                            }}
                          />
                        </div>
                        <div>
                          <Card.Title>{'title'}</Card.Title>
                        </div>
                      </Card.Body>
                      <div className='d-flex justify-content-between'>
                        <Link to={`/courses/${item.courses}`}>
                          <Button variant="outline-info">Watch now</Button>
                        </Link>
                        <div><Button variant='outline-info' onClick={()=>{removeFromPlaylistHandler(item.courses)}}>remove from playlist</Button></div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        
        <Row>
            <ChangePhoto isOpen={isOpen} onClose={onClose} chnageImageSubmitHandler={chnageImageSubmitHandler}/>
        </Row>
    </Container>
  );
};

export default Profile;
