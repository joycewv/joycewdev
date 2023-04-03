import { Box, Container, Spacer, Stack, Text,  } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const socials = [
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/shuang-wang/",
    },
    {
        icon: faGithub,
        url: "https://github.com/joycewv",
    }
]

export default function Footer () {
    return (
        <>
        <Box bg={'#333333'} color={'#f9f9f9'}>
            <Container
             spacing={4}
             py={'4'}
             maxW={'6xl'}
             as={Stack}
             direction={{ base: 'column', md: 'row' }}
             justify={{ base: 'center', md: 'space-between' }}
             align={{ base: 'center', md: 'center' }}
             >
                <Text fontWeight={'bold'}>© 2023 Joycew. All Rights Reserved.</Text>
                <Spacer />
                <Stack direction={'row'} spacing={8}>
                    {socials.map(({ icon, url}) => (
                        <a key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer">
                            <FontAwesomeIcon icon={icon} size="2x" key={url} style={{color: "#f9f9f9"}}/>
                        </a>
                    )
                    )}
                </Stack>
            </Container>
        </Box>
        </>

    )
}
