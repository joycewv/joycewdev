/*import React, { useEffect, useRef } from "react";*/
import { Box, Flex, HStack, Image, } from "@chakra-ui/react";




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
        <Box bg={'#F8F8FF'}>
            <Flex
             //maxWidth="1280px"
             margin="0 auto"
             justifyContent={'space-between'}
             alignItems={'center'}
             px={'10'}
             py={'4'}
             translateY={0}
             transitionProperty="transform"
             transitionDuration=".3s"
             transitionTimingFunction="ease-in-out"
             /*ref={headerRef}*/
             >
                <Flex>
                    <Image src={require('../assets/joycew-logo-1.png')} alt={'logo'} width={'150'} height={'37.5'} />
                </Flex>
                <HStack spacing={6} fontSize={'lg'} fontWeight={'bold'} style={{ color: '#333333' }}>
                    <a href="/">Home</a>
                    <a href="#about" onClick={handleClick("about")}  >About</a>
                    <a href="#projects" onClick={handleClick("projects")}>Projects</a>
                    <a href="#contact" onClick={handleClick("contact")}>Contact</a>
                </HStack>
            </Flex>
        </Box>
        </>
    )
}