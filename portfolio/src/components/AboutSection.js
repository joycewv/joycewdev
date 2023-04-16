import React from "react";
import { Button, Heading, Stack, Text, Container,} from '@chakra-ui/react';

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
    <>
    <Container maxW={'5xl'} id="about-section">
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'pink.400',
              zIndex: -1,
            }}>About Me</Text>
        </Heading>
        {/*<Text as={'span'} color={'pink.400'} fontWeight={700} fontSize={{ base: 'xl', lg: '2xl' }}>
          A aspiring Front-end Developer based in Sydney, Australia 📍
          </Text>*/}
        <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'md', lg: 'lg' }}>
          Hi, I'm Joyce. I am a Junior Front-end Web Developer who enjoys creating Front-end of Websites and 
          Web Applications that leads to the success of the overall product. 
        </Text>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'md', lg: 'lg' }}>
          I am continuously acquiring new programming and automation skills through both online platform like Coursera, 
          Udemy as well as guided program such as Code Like a Girl with a strong desire to learn, improve and evolve.
        </Text>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'md', lg: 'lg' }}>
          I'm open to internship or job opportunities where I can contribute, learn and grow. 
        </Text>
        <a href="#contact" onClick={handleClick("contact")}>
          <Button rounded={'full'} bg={'hotpink'} color={'white'} _hover={{ bg: 'pink.500'}}>Contact me</Button>
        </a>
      </Stack>
    </Container>
    </>
  );
}


    /*<Container maxW={'7xl'} id="about-section">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'pink.400',
                zIndex: -1,
              }}>
              About Me
            </Text>
            <br />
            <Text as={'span'} color={'pink.400'} fontWeight={700} fontSize={{ base: 'xl', lg: '2xl' }}>
              A aspiring Front-end Developer based in Sydney, Australia
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'md', lg: 'lg' }}>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <a href="#contact" onClick={handleClick("contact")}>
              <Button rounded={'full'} bg={'hotpink'} color={'white'} _hover={{ bg: 'pink.500'}}>Contact me</Button>
          </a>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Aboutme Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={require('../assets/laptopwcoffee.jpg')}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}*/



