/*import React, { useEffect, useRef } from "react";*/
import { Box, Image, Container, Stack, Spacer, useColorModeValue} from "@chakra-ui/react";





export default function Navbar () {


    /*const headerRef = useRef(null);
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },  []);*/

    const handleClick =(anchor) => () => {
        const id = `${anchor}-section`;
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
        <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
             spacing={4}
             py={'4'}
             maxW={'7xl'}
             as={Stack}
             direction={{ base: 'column', md: 'row' }}
             justify={{ base: 'center', md: 'space-between' }}
             align={{ base: 'center', md: 'center' }}
             translateY={0}
             transitionProperty="transform"
             transitionDuration=".3s"
             transitionTimingFunction="ease-in-out"
             /*ref={headerRef}*/
             >
                <a href="/">
                    <Image src={require('../assets/joycew-logo-1.png')} alt={'logo'} width={'150'} height={'37.5'} />
                </a>
                <Spacer />
                <Stack direction={'row'} spacing={8} fontSize={'lg'} fontWeight={'bold'}>
                    <a href="/">Home</a>
                    <a href="#about" onClick={handleClick("about")}  >About</a>
                    <a href="#projects" onClick={handleClick("projects")}>Projects</a>
                    <a href="#contact" onClick={handleClick("contact")}>Contact</a>
                </Stack>
            </Container>
        </Box>
        </>
    )
}