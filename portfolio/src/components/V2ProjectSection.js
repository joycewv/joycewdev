import React from "react";
import { Box, Heading, Text, VStack, useBreakpointValue} from "@chakra-ui/react";
import Project1 from "./Project1";
import Project2 from "./Project2";






export default function V2ProjectsSection () {


    return (
        <>
        <VStack p={'4'} spacing={'-2'} id="projects-section" >
            <Box>
                <Heading fontSize={'5xl'} >
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
            <Box>
                <Project1 />
                <Project2 />
            </Box>
        </VStack>
        </>
    )
}