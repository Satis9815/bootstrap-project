import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profileAction';

const UpdatePassword = () => {
  const [oldPassword, setOldPassWord] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const submitHndler =(e)=>{
    e.preventDefault();
    dispatch(changePassword(oldPassword,newPassword));
  }

  const {loading,error,message} = useSelector(state=>state.profile);

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
    <Container className='d-flex justify-content-center align-items-center'  style={{ height: '90vh' }}>
 
          <form onSubmit={submitHndler}>
            <div className='w-100 d-flex justify-content-center align-items-center'>
            <div className="d-flex flex-column ">
              <div className="d-flex flex-column w-100 ">
                <label>Old Password</label>
                <input
                  type="password"
                  onChange={e => {
                    setOldPassWord(e.target.value);
                  }}
                  value={oldPassword}
                  placeholder="old password"
                  className="border rounded p-2"
                />
              </div>
              <div className="d-flex flex-column">
                <label>New Password</label>
                <input
                  type="password"
                  onChange={e => {
                    setNewPassword(e.target.value);
                  }}
                  value={newPassword}
                  placeholder="New Password"
                  className="border rounded p-2"
                />
              </div>

                <Button isLoading={loading} w={"full"} colorScheme={'yellow'} type="submit">
                  Change
                </Button>
            </div>
            </div>
          </form>
      
    </Container>
  );
};

export default UpdatePassword;
