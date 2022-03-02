import { Box, Image, Button, Stack} from '@chakra-ui/react';
import Link from 'next/link';
import { InsuranceItem } from '../../../models/product';
import { FaPlus } from 'react-icons/fa';
import { BadgeStatus } from '../../general/BadgeStatus';
import { addToCart } from "../../../stores/cart";
import { useDispatch } from "react-redux";

export type ProductListCardProps = {
    data: InsuranceItem;
}

export default function ProductListCard(props: ProductListCardProps){
    const dispatch = useDispatch();

    return (
        <Box 
            maxW='sm'
            borderWidth={1} 
            overflow='hidden' 
            px={10} py={15} 
            display='flex' 
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Image 
                src={`/images/${props.data.imageFile}`} 
                alt={props.data.title}
                w={20} 
                h={20}
            />
            <Box
                my='5'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
                textAlign='left'
                display='flex' 
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                {props.data.title}
                <Box display='flex' alignItems='baseline' mt={3}>
                    <BadgeStatus currentStatus={props.data.currentStatus}></BadgeStatus>
                </Box>
            </Box>
            <Stack direction='row' spacing={5} mb={5}>
                <Button 
                    colorScheme='orange' 
                    variant='solid' 
                    leftIcon={< FaPlus />} 
                    onClick={() => dispatch(addToCart(props.data))}
                >
                    Add to Cart
                </Button>
                <Link href={`/insurances/${props.data.stub}`} passHref>
                    <Button variant='outline'>
                        Learn More
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
}