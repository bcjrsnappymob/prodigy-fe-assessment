import type { NextPage } from 'next'
import { Container, Flex, Heading, Box, Button } from '@chakra-ui/react';
import { insuranceItems } from '../data/mock-data';
import { ProductGrid } from '../components/products/home/ProductGrid';
import { InsuranceItem } from '../models/product';
import Link from 'next/link';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const mockData: InsuranceItem[] = insuranceItems.slice(0, 6);
  useEffect(() => {
    document.title = 'ProdigiNow';
  });
  return (
    <Container minW='100%' p={0} minH='100vh'>
      <Box
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        py={20}
        minH={'5vh'}
        minW={'100%'}
        textAlign='center'
      >
        <Heading mb={10} as='h1' size='3xl' color='white'>Prodiginow Insurance</Heading>
        <Heading mb={4} as='h5' size='sm' color='white'>Your Leading Indonesia Insurance Provider</Heading>
      </Box>
      <Flex
        my={10}
        minH={'30vh'}
        align={'center'}
        justify={'center'}
        direction={'column'}
      >
        <Heading as='h4' mb={10}>
          Popular Insurance Packages
        </Heading>
        <ProductGrid data={mockData} numberOfColumns={2}></ProductGrid>
        <Link href='/insurances' passHref>
          <Button mt={10}>
            View More Insurance Packages
          </Button>
        </Link>
      </Flex>
    </Container>
  )
}

export default Home
