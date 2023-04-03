import React from "react";
import { Box, Heading, Text, VStack, useBreakpointValue} from "@chakra-ui/react";
import Project1 from "./Project1";
import Project2 from "./Project2";


export default function V2ProjectsSection () {


    return (
        <>
        <VStack  id="projects-section" >
            <Box>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} >
                    <Text
                     as={'span'}
                     position={'relative'}
                     _after={{ content: "''", width: 'full', height: useBreakpointValue({ base: '20%', md: '30%' }),
                     position: 'absolute',
                     bottom: 1,
                     left: 0,
                     bg: 'pink.400',
                     zIndex: -1,}}
                    >
                        PROJECTS</Text>
                </Heading>
            </Box>
            <Project1 />
            <Project2 />
        </VStack>
        </>
    )
}