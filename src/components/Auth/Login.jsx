import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/userAction';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <Container minH={'90vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading
          children="Login here"
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
          my="16"
        />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              type={'email'}
              onChange={e => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Enter your email"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children={'Password'} />
            <Input
              type={'password'}
              onChange={e => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder="Enter your password"
            />
          </Box>

          <HStack my={'4'} justifyContent={'space-between'}>
            <Button fontSize={'sm'} type="submit" colorScheme={'yellow'}>
              Login
            </Button>
            <Link to="/forgetpassword" className="text-decoration-underline">
              Forget Password
            </Link>
          </HStack>
          <Box my={"4"}>
            New user?{' '}
            <Link to="/signup">
              <kbd>sign up</kbd>{' '}
            </Link>{' '}
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
