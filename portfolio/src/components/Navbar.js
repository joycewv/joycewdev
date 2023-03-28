import React from "react";
import { Box, Flex, HStack, Image, } from "@chakra-ui/react";

export default function Navbar () {
    const handleClick =(anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

    };

    

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
                            <a href="/about" onClick={handleClick("about")}>About</a>
                            <a href="/projects" >Projects</a>
                            <a href="/contact" onClick={handleClick("contactme") }>Contact</a>
                </HStack>
            </Flex>
        </Box>
        </>
    )
}