import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    HStack
  } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

  const socials = [
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/shuang-wang/",
    },
    {
        icon: faGithub,
        url: "https://github.com/joycewv",
    },

]

  export default function Hero() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              >
              <br />
              <Text as={'span'} color={'gray.700'} fontWeight={700}>
                Front-End Developer 👋
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Hi, I'm Joyce Wang. A passionate Front-end React Developer based in Sydney, Australia.📍
            </Text>
            <HStack spacing={8}>
                {socials.map(({icon, url}) => (
                    <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon} size="2x" key={url} style={{color: "#333333"}} />
                    </a>
                )
                )}
            </HStack>
            <HStack spacing={6}>
                <Text fontSize={{ base: 'md', lg: 'xl' }} color={'gray.700'}>Tech Stack</Text>
                <Text fontSize={'xl'}>|</Text>
                <Image src="https://img.icons8.com/color/48/null/html-5--v1.png"/>
                <Image src="https://img.icons8.com/color/48/null/css3.png" />
                <Image src="https://img.icons8.com/color/48/null/javascript--v1.png" />
                <Image src="https://img.icons8.com/color/48/null/react-native.png" />
            </HStack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'350px'}
              rounded={'full'}
              boxShadow={'2xl'}
              width={'350px'}
              overflow={'hidden'}>
              <Image
                alt={'Photo Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={require('../assets/photo.jpg')}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }

//import { Flex, Heading, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

/*const socials = [
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/shuang-wang/",
    },
    {
        icon: faGithub,
        url: "https://github.com/joycewv",
    },

]*/


/*const Hero = () => {
    return (
        <>
        <Stack direction={'row'} spacing={'16'}>
            <Flex flex={1} align={'center'} justify={'center'} spacing={'16'}>
                <Stack spacing={'8'}>
                    <Heading color={'pink.400'} as={'span'} fontSize={'5xl'}>Front-End Developer 👋</Heading>
                    <Text fontSize={{ base: 'md', lg: 'xl' }} color={'gray.500'}>
                        Hi, I'm Joyce Wang. A passionate Front-end React Developer based in Sydney, Australia. 📍
                    </Text>
                    <HStack spacing={8}>
                        {socials.map(({icon, url}) => (
                            <a
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon} size="2x" key={url} style={{color: "#333333"}} />
                            </a>
                        )
                        )}
                    </HStack>
                    <Spacer p={24}/>
                    <HStack spacing={8}>
                        <Text fontSize={{ base: 'md', lg: 'xl' }} color={'gray.700'}>Tech Stack</Text>
                        <Text fontSize={'xl'}>|</Text>
                        <Image src="https://img.icons8.com/color/48/null/html-5--v1.png"/>
                        <Image src="https://img.icons8.com/color/48/null/css3.png" />
                        <Image src="https://img.icons8.com/color/48/null/javascript--v1.png" />
                        <Image src="https://img.icons8.com/color/48/null/react-native.png" />
                    </HStack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    borderRadius={'full'}
                    src={require('../assets/photo.jpg')}
                    alt={'profile photo'}
                    objectFit={'cover'}
                    width={'383.5'}
                    height={'512'}
                    boxSize="400px"/>
            </Flex>
        </Stack>
        </>

    )
}

export default Hero */