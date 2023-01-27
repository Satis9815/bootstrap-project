import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container minH={"90vh"} py={"16"}>
      <form action="">
        <Heading children="Forget Password" textAlign={["center","left"]} textTransform={"uppercase"} my="16"/>
        <VStack spacing={"8"}>
          <Input type="email" required onChange={e => {
            setEmail(e.target.value);
          }} value={email} placeholder="example@gmail.com" focusBorderColor='yellow.500'/>
          <Button colorScheme={'yellow'} type="submit" w={"full"}>
            Send Reset Link
          </Button>

        </VStack>

      </form>
   
    </Container>
  );
};

export default ForgetPassword;
