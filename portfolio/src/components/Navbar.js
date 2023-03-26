import { Box, Flex, HStack, Image, } from "@chakra-ui/react";

export default function Navbar () {
    return (
        <>
        <Box bg={'#edefee'}>
            <Flex
             color="#333333"
             //maxWidth="1280px"
             margin="0 auto"
             justifyContent={'space-between'}
             alignItems={'center'}
             px={'10'}
             py={'4'}>
                <Flex>
                    <Image src={require('../assets/joycew-logo-1.png')} alt={'logo'} width={'150'} height={'37.5'} />
                </Flex>
                <HStack spacing={6} fontSize={'lg'} fontWeight={'bold'}>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/projects">Projects</a>
                            <a href="/contact">Contact</a>
                </HStack>
            </Flex>
        </Box>
        </>
    )
}