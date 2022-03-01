import { Box, Icon, Badge, Container } from '@chakra-ui/react';
import { InsuranceStatus } from '../../constants/product';
import { BadgeProps, InsuranceItem } from '../../models/product';

export default function ProductCard(props: Pick<InsuranceItem, 'title' | 'currentStatus' | 'icon'>){

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
            justifyContent='center'
        >
            <Icon as={props.icon} w={20} h={20}/>
            <Container ml={5}>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                    textAlign='left'
                >
                    {props.title}
                </Box>
                <Box display='flex' alignItems='baseline' mt={2}>
                    <BadgeStatus currentStatus={props.currentStatus}></BadgeStatus>
                </Box>
            </Container>
        </Box>
    );
}