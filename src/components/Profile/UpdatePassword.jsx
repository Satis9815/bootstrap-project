import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profileAction';

const UpdatePassword = () => {
  const [oldPassword, setOldPassWord] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const submitHndler = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
  };

  const { loading, error, message } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, message, error]);

  return (
    <Container minH={'90vh'} py={'16'}>
      <form onSubmit={submitHndler}>
        <Heading
          children="Update Password"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            type="password"
            value={oldPassword}
            onChange={e => {
              setOldPassWord(e.target.value);
            }}
            placeholder="Old Password"
            focusBorderColor="yellow.500"
          />

          <Input
            type="password"
            onChange={e => {
              setNewPassword(e.target.value);
            }}
            value={newPassword}
            placeholder="New Password"
            focusBorderColor="yellow.500"
          />

          <Button
            isLoading={loading}
            w={'full'}
            colorScheme={'yellow'}
            type="submit"
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdatePassword;
