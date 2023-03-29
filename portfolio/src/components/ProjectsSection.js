import React from "react";
import { Box, Heading, Text, VStack, useBreakpointValue, Spacer } from "@chakra-ui/react";
import Card from "./Card";




export default function ProjectsSection () {
    const projects = [
        {
            getImageSrc: () => require("../assets/joycew-logo-1.png"),
            projectnumber: "project 1",
            title: "Little Lemon Restaurant",
            description: "A restaurant website, the online platform allows users to reserve a table and browse online menu. The website provides an interface for searching, comparing food, and reserving table.",

        },
        {
            getImageSrc: () => require("../assets/joycew-logo-1.png"),
            projectnumber: "project 2",
            title: "Little Lemon Restaurant",
            description: "A restaurant website, the online platform allows users to reserve a table and browse online menu. The website provides an interface for searching, comparing food, and reserving table.",

        },
        {
            getImageSrc: () => require("../assets/joycew-logo-1.png"),
            projectnumber: "project 3",
            title: "Little Lemon Restaurant",
            description: "A restaurant website, the online platform allows users to reserve a table and browse online menu. The website provides an interface for searching, comparing food, and reserving table.",

        },

    ];

    return (
        <>
        <VStack p={'40'} spacing={'8'} >
            <Box>
                <Heading fontSize={'5xl'}>
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
            <Spacer />
            <Box display={'grid'} gridTemplateColumns="repeat(3,minmax(0,1fr))" gridGap={8}>
                {projects.map((project) => (
                    <Card
                     key={project.title}
                     imageSrc={project.getImageSrc()}
                     projectnumber={project.projectnumber}
                     title={project.title}
                     description={project.description}
                      />
                ))}

            </Box>
        </VStack>
        </>
    )
}