import { 
    Container, 
    Box, 
    Flex, 
    Image,
    Heading,
    Text,
    Stack,
    Button,
    StackDivider,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
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
                    <Box mr={20}>
                        <Image 
                            src={`/images/${data.imageFile}`} 
                            alt={data.title}
                            maxW='500'
                        />
                    </Box>
                    <Box>
                        <Flex flexDirection='column'>
                            <Box display='flex' alignItems='baseline' mb={3}>
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
            <Box py={5}>
                <Flex 
                    flexDirection='column'
                    alignItems='center'
                >
                    <Heading as='h4' size='md' mt={8} mb={20}>
                        {`Why choose ${data.title} ?`}
                    </Heading>
                    <Box>
                        <Stack direction='row' divider={<StackDivider borderColor='gray.200' />} spacing='100px'>
                            <Box textAlign='center'>
                                <Heading as='h6' size='md' mb={8}>Benefits</Heading>
                                <UnorderedList textAlign='left'>
                                    {
                                        data.benefits.map((text: string, id: number) => {
                                            return <ListItem key={id}>{text}</ListItem>;
                                        })
                                    }
                                </UnorderedList>
                            </Box>
                            <Box textAlign='center'>
                                <Heading as='h6' size='md' mb={8}>Suitable For</Heading>
                                <UnorderedList textAlign='left'>
                                    {
                                        data.demographics.map((text: string, id: number) => {
                                            return <ListItem key={id}>{text}</ListItem>;
                                        })
                                    }
                                </UnorderedList>
                            </Box>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );

}

export default InsuranceDetailPage;