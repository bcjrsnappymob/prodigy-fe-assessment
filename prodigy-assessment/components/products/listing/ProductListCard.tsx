import { Box, Image, Badge, Button, Stack} from '@chakra-ui/react';
import Link from 'next/link';
import { InsuranceStatus } from '../../../constants/product';
import { BadgeProps, InsuranceItem } from '../../../models/product';
import { FaPlus } from 'react-icons/fa';

export default function ProductListCard(props: Pick<InsuranceItem, 'title' | 'currentStatus' | 'imageFile' | 'stub'>){

    const BadgeStatus = (props: BadgeProps) => {

        if (props.currentStatus === InsuranceStatus.new) {
            return (
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    { props.currentStatus }
                </Badge>
            );
        }

        if (props.currentStatus === InsuranceStatus.popular) {
            return (
                <Badge borderRadius='full' px='2' colorScheme='red'>
                    { props.currentStatus }
                </Badge>
            );
        }

        return (
            <template></template>
        );
    }

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
                src={`/images/${props.imageFile}`} 
                alt={props.title}
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
                {props.title}
                <Box display='flex' alignItems='baseline' mt={3}>
                    <BadgeStatus currentStatus={props.currentStatus}></BadgeStatus>
                </Box>
            </Box>
            <Stack direction='row' spacing={5} mb={5}>
                <Button 
                    colorScheme='orange' 
                    variant='solid' 
                    leftIcon={< FaPlus />} 
                >
                    Add to Cart
                </Button>
                <Link href={`/insurances/${props.stub}`} passHref>
                    <Button variant='outline'>
                        Learn More
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
}