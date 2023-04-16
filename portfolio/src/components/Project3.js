import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
  } from '@chakra-ui/react';

  export default function Project3() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 5 }}>
            <Heading
              lineHeight={1.1}
              >
              <Text
                as={'span'}
                position={'relative'}
                textTransform={'uppercase'}
                color={'pink.400'}
                fontSize={'md'}
                fontWeight={800}
                >
                project 3
              </Text>
              <br />
              <Text as={'span'} color={'gray.700'} fontWeight={700}>
                Robot Framework 🤖
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Use Robot Framework to do automated end-to-end testing from opening up the website, 
              navigating to particular section, filling and submitting the form.
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              Automated test will also generate reports and screenshots.
            </Text>
            <Stack fontSize={'lg'}>
                <Stack direction={'row'}>
                    <Text>Tech Stack:</Text>
                    <Text color={'gray.500'}>Robot Framework on top of Python</Text>
                </Stack>
                <Stack direction={'row'}>
                    <Text>Third Party Libraries & APIs:</Text>
                    <Text color={'gray.500'}>Selenium Library</Text>
                </Stack>
            </Stack>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <a href="https://github.com/joycewv/robot-testing">
                <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    colorScheme={'pink'}
                    bg={'pink.400'}
                    _hover={{ bg: 'pink.500' }}
                    >
                    Code
                </Button>
              </a>
              <a href="https://github.com/joycewv/robot-testing">
                <Button
                    rounded={'full'}
                    size={'lg'}
                    fontWeight={'normal'}
                    px={6}
                    >
                    Live Demo
                </Button>
              </a>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Project2 Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  require('../assets/robot-framework-testing.png')
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
