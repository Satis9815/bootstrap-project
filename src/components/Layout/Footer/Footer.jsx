import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {FaFacebook,FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <Box padding={"3"} bg={"blackAlpha.900"} minH={"6vh"}>
        <Stack direction={["column","row"]}>
          <VStack alignItems={["center","flex-start"]} width={"full"} >
            <Heading children="All Rights reserved &copy;2023 " color={"white"} size={"md"}/>
            <Heading fontFamily={"body"} size={"sm"} children="@Er.Satis Kumar Chaudhary" color={"yellow.400"}/>
          </VStack>
            {/* <div className="paragraph">
                <p>All Rights reserved &copy;2023 || Er.Satis Kumar Chaudhary</p>
            </div> */}
            <HStack spacing={["2","10"]} justifyContent="center" color={"white"} fontSize="30">
                <a href="_target" className='mx-2'><FaFacebook/></a>
                <a href="_target" className='mx-2'><FaInstagram/></a>
                <a href="_target" className='mx-2'><FaLinkedinIn/></a>
                <a href="_target" className='mx-2'><FaGithub/></a>

            </HStack>
        </Stack>
      
    </Box>
  )
}

export default Footer
