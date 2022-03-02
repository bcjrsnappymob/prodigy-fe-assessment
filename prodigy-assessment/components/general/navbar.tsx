import { Box, Button, Container, Flex, IconButton, Stack, useColorModeValue, useDisclosure, Text } from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import NextLink from 'next/link';
import Link from 'next/link';
import { CartPopover } from '../products/cart/CartPopover';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    const cartItems = useSelector((state: any) => { return state.cartStore.items });

    return (
      <Box>
        <Container maxW={'7xl'}>
          <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            align={'center'}>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
              <NextLink href={'/'} passHref>
                <Text
                  cursor={'pointer'}
                  fontFamily={'heading'}
                  fontWeight={'bold'}
                  color={useColorModeValue('gray.800', 'white')}>
                  PRODIGINOW
                </Text>
              </NextLink>
            </Flex>
  
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}
            >
              <CartPopover data={cartItems}></CartPopover>
              <Link href='/insurances' passHref>
                <Button
                  fontSize={'sm'}
                  fontWeight={400}
                  variant={''}
                  _hover={{textDecoration: 'none'}}
                >
                  Insurances
                </Button>
              </Link>
              <Button
                fontSize={'sm'}
                fontWeight={400}
                variant={''}
                _hover={{textDecoration: 'none'}}>
                Sign In
              </Button>
              <Button
                fontSize={'sm'}
                fontWeight={400}
                variant={''}
                _hover={{textDecoration: 'none'}}
              >
                Register
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>
    )
}