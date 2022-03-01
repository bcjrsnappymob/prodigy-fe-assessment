import { Box, Icon, Badge, Button, Stack, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { InsuranceStatus } from '../../../constants/product';
import { BadgeProps, InsuranceItem } from '../../../models/product';
import { FaPlus } from 'react-icons/fa';

export default function ProductListCard(props: Pick<InsuranceItem, 'title' | 'currentStatus' | 'icon'>){

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
            <Icon as={props.icon} w={20} h={20}/>
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
                <Heading size='sm' as='h6'>{props.title}</Heading>
                <Box display='flex' alignItems='baseline' mt={3}>
                    <BadgeStatus currentStatus={props.currentStatus}></BadgeStatus>
                </Box>
            </Box>
            <Stack direction='row' spacing={5} mb={5}>
                <Button colorScheme='orange' variant='solid' leftIcon={< FaPlus />}>
                    Add to Cart
                </Button>
                <Link href='' passHref>
                    <Button variant='outline'>
                        Learn More
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
}