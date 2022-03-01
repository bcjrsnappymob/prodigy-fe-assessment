import { Container, Box, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ProductGrid } from '../../components/products/ProductGrid';
import { insuranceItems } from '../../data/mock-data';
import { InsuranceItem } from '../../models/product';
import SearchBar from '../../components/general/Searchbar';

const InsuranceListingPage: NextPage = () => {
    const mockData: InsuranceItem[] = insuranceItems;
    const [insurances, setInsurances] = useState(insuranceItems);
    useEffect(() => {
        document.title = 'ProdigiNow | Insurances';
    });
    
    return (
        <Container minW='100%' p={0} minH='100vh'>
            <Box px={80} py={15}>
                <Flex width='100%' alignItems='center' justifyContent='space-between'>
                    <Heading as='h6' size='md'>
                        Insurances
                    </Heading>
                    <SearchBar></SearchBar>
                </Flex>
                <Flex
                    my={10}
                    minH={'30vh'}
                    align={'center'}
                    justify={'center'}
                    direction={'column'}
                >
                    <ProductGrid data={insurances} numberOfColumns={3}></ProductGrid>
                </Flex>
            </Box>
        </Container>
    );
}

export default InsuranceListingPage;