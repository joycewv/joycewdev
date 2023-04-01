import { Box, Heading, Text, Stack, useColorModeValue, Image} from '@chakra-ui/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Card ({ imageSrc, projectnumber, title, description, techstack, libraries, codelink, demolink}) {
  return (
    <Box>
      <Stack maxW={'700px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'3xl'} p={6} overflow={'hidden'}>
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} boxSize={'-moz-fit-content'}>
          <Image src={imageSrc} alt={title}/>
        </Box>
        <Box>
        <Stack spacing={4}>
          <Text color={'pink.400'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}>
            {projectnumber}
          </Text>
          <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'xl'} fontFamily={'body'}>
            {title}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            {description}
          </Text>
          <Stack direction={'row'}>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={'lg'} fontWeight={'semibold'}>Tech Stack:</Text>
            <Text fontSize={'lg'} color={'gray.500'}>{techstack}</Text>
          </Stack>
          <Stack direction={'row'}>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={'lg'} fontWeight={'semibold'}>Third Party Libraries & APIs:</Text>
            <Text fontSize={'lg'} color={'gray.500'}>{libraries}</Text>
          </Stack>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={8} align={'center'} justifyContent={'space-between'} >
          <a href={codelink}>
            <Stack direction={'row'} spacing={2} color={'#333a33'}>
              <Text fontWeight={700} fontSize={'lg'}>Code</Text>
              <FontAwesomeIcon icon={faGithub} style={{color: "#333a33",}} size={'2xl'} />
            </Stack>
          </a>
          <a href={demolink}>
            <Stack direction={'row'} spacing={2} color={'#333a33'}>
              <Text fontWeight={600} fontSize={'lg'}>Live Demo</Text>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#333a33",}} size={'xl'} />
            </Stack>
          </a>
        </Stack>
        </Box>
      </Stack>
    </Box>
  );
}