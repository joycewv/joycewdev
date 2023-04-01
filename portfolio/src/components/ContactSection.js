import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faUser, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { useFormik} from "formik";
import * as Yup from 'yup';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    FormErrorMessage
  } from '@chakra-ui/react';


  export default function ContectSection () {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_ddao7bx', 'template_rhtv45t', form.current, 'vtf7S3zvYoYTvrOvu')
      .then((result) => {
          console.log(result.text);
          console.log("comment sent")
      }, (error) => {
          console.log(error.text);
      });

    }

    const formik = useFormik ({
      initialValues: {
        firstName: "",
        email: "",
        Comment: "",
      },

      validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        comment: Yup.string()
         .min(25, "Must be at least 25 characters")
         .required("Required"),

      }),
    })

    return (
      <>
      <Container bg={'#F8F8FF'} maxW="full" mt={0} centerContent overflow="hidden" id="contact">
        <Flex>
          <Box
            bg="#fbd0d4"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading fontSize={'5xl'}>CONTACT</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form to keep in touch!
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#0B0E3F"
                          _hover={{ border: '2px solid #FF1493' }}
                          leftIcon={<FontAwesomeIcon icon={faEnvelopeOpenText} color="#FF1493" size="20px" />}>
                          hello@joycew.dev
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#0B0E3F"
                          _hover={{ border: '2px solid #FF1493' }}
                          leftIcon={<FontAwesomeIcon icon={faLocationDot} color="#FF1493" size="20px" />}>
                          Sydney, Australia
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#FF1493' }}
                        icon={<FontAwesomeIcon icon={faLinkedinIn} size="lg"/>}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#FF1493' }}
                        icon={<FontAwesomeIcon icon={faGithub} size="lg"/>}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg" >
                    <Box m={8} color="#0B0E3F">
                      <form ref={form} onSubmit={sendEmail}>
                      <VStack spacing={5}>
                        <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                          <FormLabel htmlFor="firstName">Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<FontAwesomeIcon icon={faUser} color="gray.800" />}
                            />
                            <Input type="text" size="md" id="firstName" name="firstName" {...formik.getFieldProps("firstName")}  />
                          </InputGroup>
                          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                          <FormLabel htmlFor="email">Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<FontAwesomeIcon icon={faEnvelope} color="gray.800" />}
                            />
                            <Input size="md" id="email" name="email" type="email" {...formik.getFieldProps("email")} />
                          </InputGroup>
                          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                          <FormLabel htmlFor="comment">Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            id="comment"
                            name="comment"
                            {...formik.getFieldProps("comment")}
                          />
                          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg={'hotpink'}
                            color={'white'}
                            _hover={{ bg: 'pink.500'}}
                            type="submit" value="Send"
                            >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                      </form>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      </>
    );
  }