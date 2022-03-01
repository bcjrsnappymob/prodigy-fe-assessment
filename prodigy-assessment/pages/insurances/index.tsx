import { Container, Box, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState, ChangeEvent } from 'react';
import { ProductGrid } from '../../components/products/ProductGrid';
import { insuranceItems } from '../../data/mock-data';
import { InsuranceItem } from '../../models/product';
import SearchBar from '../../components/general/Searchbar';

const InsuranceListingPage: NextPage = () => {
    const mockData: InsuranceItem[] = insuranceItems;
    const [insurances, setInsurances] = useState(insuranceItems);
    const [searchBarValue, setSearchBarValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const searchQuery: string = event.target.value.toLowerCase();
        // Update Search Bar State
        setSearchBarValue(searchQuery);
        // Filter out Data by Title, If searchQuery is empty, set back to original data
        if (searchQuery.length === 0) {
            setInsurances(mockData);
        }

        const filteredInsurances = mockData.filter((item) => {
            return item.title.toLowerCase().includes(searchQuery);
        });

        setInsurances(filteredInsurances);
    };

    useEffect(() => {
        document.title = 'ProdigiNow | Insurances';
        console.log(searchBarValue);
    });
    
    return (
        <Container minW='100%' p={0} minH='100vh'>
            <Box px={80} py={15}>
                <Flex width='100%' alignItems='center' justifyContent='space-between'>
                    <Heading as='h6' size='md'>
                        Insurances
                    </Heading>
                    <SearchBar onSearch={handleChange}></SearchBar>
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