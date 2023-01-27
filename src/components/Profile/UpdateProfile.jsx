import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/profileAction';
import { getMyProfile } from '../../redux/actions/userAction';

const UpdateProfile = ({user}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const dispatch = useDispatch();
  const {loading} = useSelector(state=>state.profile);

  const navigate = useNavigate();

  const submitHndler =async(e)=>{
    e.preventDefault();
   await dispatch(updateProfile(name,email));
   dispatch(getMyProfile());
   navigate('/profile');
  }

 
  return (
    <Container py={"16"} minH={'90vh'}>
 
          <form onSubmit={submitHndler}>
            <Heading textTransform={"uppercase"} 
            children="Update Profile" my={"16"}
            textAlign={["center","left"]}/>
            <VStack  spacing={'8'}>
              {/* <div className="d-flex flex-column w-100 "> */}
                {/* <label>Name</label> */}
                {/* <input
                  type="text"
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  value={name}
                  placeholder="Name"
                  className="border rounded p-2"
                /> */}
                <Input 
                 type="text"
                 value={name}
                 onChange={e => {
                  setName(e.target.value);
                }} 
                placeholder="Name"
                focusBorderColor='yellow.500'/>
              {/* </div> */}
              {/* <div className="d-flex flex-column"> */}
                {/* <label>Email</label> */}
                {/* <input
                  type="email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  placeholder="Example@gmail.com"
                  className="border rounded p-2"
                /> */}
                <Input 
                type="email"
                 value={email}
                onChange={e => {setEmail(e.target.value);}}  
                placeholder="Example@gmail.com" 
                focusBorderColor='yellow.500'/>
              {/* </div> */}

              {/* <div className='my-2'> */}
              <Button isLoading={loading} w={"full"} colorScheme={'yellow'} type="submit">
                  update
                </Button>
              {/* </div> */}
            </VStack>
       
          </form>
      
    </Container>
  );
};


export default UpdateProfile
