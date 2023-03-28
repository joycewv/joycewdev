import React from "react";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useFormik,} from "formik";
import * as Yup from "yup";



export default function ContectMeSection () {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            comment: "",
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            comment: Yup.string()
            .min(25, "Must be at least 25 characters")
            .required("Required"),
        })

    })




    return (
        <>
        <Box bg={'#FFB6C1'} py={'16'} spacing={'8'}>
            <VStack p={32} alignItems={'flex-start'}>
                <Heading as={'h1'} id="contactme-section">Contact me</Heading>
                <Box p={6} rounded= {'md'} w={'100%'}>
                    <form>
                        <VStack spacing={'4'} >
                            <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor={'firstName'}>Name</FormLabel>
                                <Input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} ></Input>
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor={'email'}>Email Address</FormLabel>
                                <Input id="email" name="email" type="email" {...formik.getFieldProps("email")}></Input>
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                                <FormLabel htmlFor={'comment'}>Your message</FormLabel>
                                <Textarea id="comment" name="comment" type="comment" height={'250'} {...formik.getFieldProps("comment")} />
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </Box>
        </>
    )
}