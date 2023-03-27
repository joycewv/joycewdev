import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapLocationDot, faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons"

export default function Contact () {
    return (
        <>
        <Box
         bg={'#edefee'}
         px={'60'}
         py={'40'}>
            <Stack
             direction={'column'}
             bg={'red'}
             spacing={'16'}
             >
                <VStack
                 bg={'green'}
                 alignItems={'flex-start'}
                >
                    <Heading fontSize={'lg'} fontWeight={'bolder'} color={'hotpink'}>CONTACT</Heading>
                    <Text fontSize={'2xl'} fontWeight={'bolder'}>Don't be shy! Hit me up!</Text>
                </VStack>
                <Stack
                bg={'white'}
                direction={'row'}
                spacing={'28'}
                >
                    <HStack bg={'yellow'} spacing={'8'}>
                        <HStack >
                            <FontAwesomeIcon icon={faMapLocationDot} size={'2xl'} style={{color: "#ff69b4"}} />
                        </HStack>
                        <Stack direction={'column'} >
                            <Text fontSize={'lg'} fontWeight={'bolder'}>Location</Text>
                            <Text fontSize={'lg'} fontWeight={'bolder'} color={'#616A6B'} _hover={{color:'hotpink'}} >Sydney, Australia</Text>
                        </Stack>
                    </HStack>
                    <HStack spacing={'8'}>
                        <HStack>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} size={'2xl'} style={{color: "#ff69b4"}} />
                        </HStack>
                        <Stack direction={'column'} >
                            <Text fontSize={'lg'} fontWeight={'bolder'}>Mail</Text>
                            <Text fontSize={'lg'} fontWeight={'600'} color={'#616A6B'} _hover={{color:'hotpink'}}>hi@joycew.dev</Text>
                        </Stack>
                    </HStack>
                </Stack>
            </Stack>
        </Box>
        </>
    )
}