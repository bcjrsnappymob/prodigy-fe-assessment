import { Box, Image, Container } from '@chakra-ui/react';
import { } from '../../../constants/product';
import { InsuranceItem } from '../../../models/product';
import { BadgeStatus } from '../../general/BadgeStatus';

export type ProductCardProps = {
    data: InsuranceItem;
};

export default function ProductCard(props: ProductCardProps){

    return (
        <Box 
            maxW='sm'
            borderWidth={1} 
            overflow='hidden' 
            px={10} py={15} 
            display='flex' 
            justifyContent='center'
        >
            <Image 
                src={`/images/${props.data.imageFile}`} 
                alt={props.data.title}
                w={20} 
                h={20}
            />
            <Container ml={5}>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    textAlign='left'
                >
                    {props.data.title}
                </Box>
                <Box display='flex' alignItems='baseline' mt={2}>
                    <BadgeStatus currentStatus={props.data.currentStatus}></BadgeStatus>
                </Box>
            </Container>
        </Box>
    );
}