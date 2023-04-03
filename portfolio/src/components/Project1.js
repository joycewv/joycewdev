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

  export default function Project1() {
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
              <Text
                as={'span'}
                position={'relative'}
                textTransform={'uppercase'}
                color={'pink.400'}
                fontSize={'md'}
                fontWeight={800}
                >
                project 1
              </Text>
              <br />
              <Text as={'span'} color={'gray.700'} fontWeight={700}>
                Little Lemon Restaurant 🍋
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Stack fontSize={'lg'}>
                <Stack direction={'row'}>
                    <Text>Tech Stack:</Text>
                    <Text color={'gray.500'}>React</Text>
                </Stack>
                <Stack direction={'row'}>
                    <Text>Third Party Libraries & APIs:</Text>
                    <Text color={'gray.500'}>@chakra-ui/react, formik, react-router-dom</Text>
                </Stack>
            </Stack>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <a href="https://github.com/joycewv/littlelemon">
                <Button
                    rounded={'full'}
                    size={'lg'}
                    px={6}
                    colorScheme={'pink'}
                    bg={'pink.400'}
                    _hover={{ bg: 'pink.500' }}>
                    Code
                </Button>
              </a>
              <a href="https://clg-week10-assignement.netlify.app/">
                <Button
                    rounded={'full'}
                    size={'lg'}
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
                alt={'Project1 Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
