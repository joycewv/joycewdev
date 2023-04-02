import React from "react";
import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue, } from '@chakra-ui/react';

  export default function AboutSection() {

    const handleClick =(button) => () => {
      const id = `${button}-section`;
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({
              behavior: "smooth",
              block: "start",
          });
      }
  }



    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} p={4} spacing={'16'} id="about-section">
        <Flex flex={1} borderRadius={'3xl'}>
          <Image alt={'About Image'} objectFit={'cover'} src={require('../assets/laptopwcoffee.jpg')} borderRadius={'3xl'} />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} >
              <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'pink.400',
                  zIndex: -1,
                }}>
                ABOUT ME
              </Text>
            </Heading>
            <Heading color={'pink.400'} as={'span'} fontSize={'3xl'} >A aspiring Front-end Developer based in Sydney, Australia</Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button rounded={'full'} bg={'hotpink'} color={'white'} _hover={{ bg: 'pink.500'}} onClick={handleClick("contact")}>Contact me</Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }