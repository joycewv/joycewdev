import { Box, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react";
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
        <Box bg={'#333333'}>
            <Container>
                <Text>© 2023 Joycew. All Rights Reserved.</Text>
                <Stack>
                    <HStack spacing={8}>
                        {socials.map(({ icon, url}) => (
                            <a key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon} size="2x" key={url}/>
                            </a>
                        )
                        )}
                    </HStack>
                </Stack>
            </Container>
            <footer>
                <Flex
                 alignItems={'center'}
                 justifyContent={'center'}
                 margin={'0 auto'}
                 px={'10'}
                 py={'10'}
                 color={'#FFFFFF'}
                 fontSize={'lg'}
                 fontWeight={'bold'}>
                    <Text>© 2023 Joycew. All Rights Reserved.</Text>
                </Flex>
            </footer>
        </Box>
        </>

    )
}
