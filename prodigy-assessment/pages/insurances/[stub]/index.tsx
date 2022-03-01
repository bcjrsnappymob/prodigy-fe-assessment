import { Container, Box, Flex, Image, Heading, Text, Stack, Button, Badge } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next/types";
import { useEffect } from "react";
import { insuranceDetailItems } from "../../../data/mock-data";
import { FaPlus, FaHeart, FaPhone } from 'react-icons/fa';
import { BadgeStatus } from "../../../components/general/BadgeStatus";

// Make a mock API call with getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (params) {
        const currentInsurance = insuranceDetailItems.find((item) => {
            return item.stub === params.stub;
        });

        if (currentInsurance) {
            return {
                props: {
                    data: currentInsurance,
                }
            };
        }
    }
    return {
        notFound: true,
    }
}

const InsuranceDetailPage: NextPage = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    useEffect(() => {
        // Fetch mock data with stub
        // Return Mock Data        
        document.title = `ProdigiNow | ${data.title}`;
    });

    return (
        <Container minW='100%' px={80} py={15} minH='100vh'>
            <Box>
                <Flex width='100%' alignItems='center'>
                    <Box>
                        <Image 
                            src={`/images/${data.imageFile}`} 
                            alt={data.title}
                        />
                    </Box>
                    <Box>
                        <Flex flexDirection='column'>
                            <Box display='flex' alignItems='baseline' mt={3}>
                                <BadgeStatus currentStatus={data.currentStatus}></BadgeStatus>
                            </Box>
                            <Heading as='h1'>{data.title}</Heading>
                            <Text fontSize='xl' my={3}>{data.description}</Text>
                            <Stack direction='row' spacing={5} mb={5} mt={10}>
                                <Button 
                                    colorScheme='orange' 
                                    variant='solid' 
                                    leftIcon={< FaPlus />} 
                                >
                                    Add to Cart
                                </Button>
                                <Button 
                                    colorScheme='pink' 
                                    variant='solid' 
                                    leftIcon={< FaHeart />} 
                                >
                                    Favorite It
                                </Button>
                                <Button 
                                    colorScheme='green' 
                                    variant='solid' 
                                    leftIcon={< FaPhone />} 
                                >
                                    Contact Us
                                </Button>
                            </Stack>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box>

            </Box>
        </Container>
    );

}

export default InsuranceDetailPage;