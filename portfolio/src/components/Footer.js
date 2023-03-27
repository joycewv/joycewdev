import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
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
            <Flex
             px={'60'}
             py={'16'}
             margin="0 auto"
             justifyContent={'space-between'}
             alignItems={'center'}
             >
                <Stack
                 color={'#FFFFFF'}
                 fontSize={'lg'}
                 fontWeight={'bolder'}
                 >
                    <Text>© 2023 Joycew. All Rights Reserved.</Text>
                </Stack>
                <Stack>
                    <HStack spacing={8}>
                        {socials.map(({ icon, url}) => (
                            <a key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon} size="2x" key={url} style={{color: "#ffffff"}}/>
                            </a>
                        )
                        )}
                    </HStack>
                </Stack>
            </Flex>
        </Box>
        </>

    )
}
