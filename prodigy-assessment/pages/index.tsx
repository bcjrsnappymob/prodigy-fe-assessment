import type { NextPage } from 'next'
import { Container, Flex, Heading, Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container minW='100%' p={0}>
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
        my={20}
        minH={'85vh'}
        align={'center'}
        justify={'center'}
        direction={'column'}
      >
        
      </Flex>
    </Container>
  )
}

export default Home
