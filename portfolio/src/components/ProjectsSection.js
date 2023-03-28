import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function ProjectsSection () {
    return (
        <>
        <Box bg={'#20B2AA'} py={'16'} spacing={'8'} p={'8'}>
            <Heading as={'h1'} id="projects-section">Projects</Heading>
            <Box>
                <p>This is Projects section</p>
            </Box>
        </Box>
        </>
    )
}