import {
    Box,
    Container,
    Stack,
    Text,
} from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box>
            <Container
                as={Stack}
                maxW={'7xl'}
                py={4}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text fontSize={14} color={'#4A5528'}>© 2022 Prodiginow. All rights reserved</Text>
            </Container>
        </Box>
    );
}