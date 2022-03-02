import { Box, Image, Container, Button, Text } from '@chakra-ui/react';
import { InsuranceItem } from '../../../models/product';
import { FaTrash } from 'react-icons/fa';

export type CardCardProps = {
    data: InsuranceItem;
}

export default function CartCard(props: CardCardProps) {
    console.log(props);
    return (
        <Box
            borderWidth={1} 
            overflow='hidden' 
            display='flex' 
            justifyContent='center'
        >
            <Container my={15} display='flex'>
                <Image
                    src={`/images/${props.data.imageFile}`} 
                    alt={props.data.title}
                    w={20} 
                    h={20}
                ></Image>
                <Container 
                    ml={2}
                    display='flex'
                    flexDirection='column'
                    maxW={180}
                >
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        textAlign='left'
                    >
                        <Text
                            fontSize={16}
                            isTruncated
                        >
                            {props.data.title}
                        </Text>
                    </Box>
                    <Button
                        mt={5}
                        colorScheme='red' 
                        variant='solid' 
                        leftIcon={< FaTrash />}
                    >
                        Remove
                    </Button>
                </Container>
            </Container>
        </Box>
    );
}