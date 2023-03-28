import { Box, Flex, Heading, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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


const Hero = () => {
    return (
        <>
        <Stack bg={'#F8F8FF'} >
            <Box >
                <Stack direction={'row'}  p={'28'} spacing={'16'}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'} spacing={'16'}>
                        <Stack spacing={'8'}>
                            <Heading color={'pink.400'} as={'span'} fontSize={'5xl'}>Front-End Developer</Heading>
                            <Text fontSize={{ base: 'md', lg: 'xl' }} color={'gray.500'}>
                                Hi, I'm Joyce Wang. A passionate Front-end React Developer based in Sydney, Australia.
                            </Text>
                            <HStack spacing={8}>
                                {socials.map(({icon, url}) => (
                                    <a
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={icon} size="2x" key={url} style={{color: "#333333"}} />
                                    </a>
                                )
                                )}
                            </HStack>
                            <Spacer p={32}/>
                            <HStack>
                                <Text fontSize={{ base: 'md', lg: 'xl' }} color={'gray.700'}>Tech Stack</Text>
                                <Text fontSize={'xl'}>|</Text>
                            </HStack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image borderRadius={'full'} src={require('../assets/photo.jpg')} alt={'profile photo'} objectFit={'cover'} width={'383.5'} height={'512'} />
                    </Flex>
                </Stack>
            </Box>

        </Stack>
        </>

    )
}

export default Hero