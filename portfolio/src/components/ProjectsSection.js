import React from "react";
import { Box, Heading, Text, VStack, useBreakpointValue, Spacer } from "@chakra-ui/react";
import Card from "./Card";





export default function ProjectsSection () {
    const projects = [
        {
            getImageSrc: () => require("../assets/header.png"),
            projectnumber: "project 1",
            title: "Little Lemon Restaurant 🍋",
            description: "A restaurant website, the online platform allows users to reserve a table and browse online menu. The website provides an interface for searching, comparing food, and reserving table.",
            techstack: "React",
            libraries: "@chakra-ui/react, formik, react-router-dom",
            codelink: "https://github.com/joycewv/littlelemon",
            demolink: "https://clg-week10-assignement.netlify.app/",
        },
        {
            getImageSrc: () => require("../assets/specials.png"),
            projectnumber: "project 2",
            title: "Little Lemon Restaurant",
            description: "A restaurant website, the online platform allows users to reserve a table and browse online menu. The website provides an interface for searching, comparing food, and reserving table.",
            techstack: "AAA",
            libraries: "@chakra-ui/react",
            codelink: "https://github.com/joycewv/clg-week6",
            demolink: "https://clg-week6-assignment.netlify.app/",

        },
        {
            getImageSrc: () => require("../assets/reservation.png"),
            projectnumber: "project 3",
            title: "Little Lemon Restaurant",
            description: "A restaurant website, the online platform allows users to reserve a table and browse online menu. The website provides an interface for searching, comparing food, and reserving table.",
            techstack: "BBB",
            libraries: "react-router-dom",
            codelink: "https://github.com/joycewv/CLG-Week-1",
            demolink: "https://clg-week1-assignment.netlify.app/",
        },

    ];


    return (
        <>
        <VStack p={'40'} spacing={'8'} id="projects-section" >
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
            <Spacer />
            <Box display={'grid'} gridTemplateColumns="repeat(1,minmax(0,1fr))" gridGap={16}>
                {projects.map((project) => (
                    <Card
                     key={project.title}
                     imageSrc={project.getImageSrc()}
                     projectnumber={project.projectnumber}
                     title={project.title}
                     description={project.description}
                     techstack={project.techstack}
                     libraries={project.libraries}
                     codelink={project.codelink}
                     demolink={project.demolink}
                    />
                ))}

            </Box>
        </VStack>
        </>
    )
}