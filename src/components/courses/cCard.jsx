import { Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom'

const cCard = ({
    id,
  views,
  title,
  imgSrc,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
            <VStack className='course' alignItems={["center","flex-start"]}>
  
                <Image src={imgSrc} alt="pic" boxSize={"60"} objectFit={"contain"} />
                <Heading textAlign={["center","left"]} size="sm" maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={title}/>
                <Text noOfLines={2} children={description}/>
                <HStack>
                    <Text fontWeight={"bold"} textTransform={"uppercase"} children={"Creator -"}/>
                    <Text fontFamily={"body"} textTransform={"uppercase"} children={creator}/>
                </HStack>
                <Heading textAlign={"center"} size="xs" children={`Lectures - ${lectureCount}`} textTransform={"uppercase"}
                />
                <Heading  size="xs" children={`Views - ${views}`} textTransform={"uppercase"}
                />
                <Stack direction={["column","row"]} alignItems={"center"}>
                <Link to={`/courses/${id}`}><Button colorScheme={"yellow"}>Watch now</Button></Link>
                <Button variant={"ghost"} colorScheme={"yellow"} onClick={()=>{addToPlayListHandler(id)}}>Add to playlist</Button>
                     
                </Stack>
            
            </VStack>

  );
};
export default cCard
