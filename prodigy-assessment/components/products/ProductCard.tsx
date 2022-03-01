import { Box, Icon, Badge } from '@chakra-ui/react';
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
        <Box maxW='sm' borderWidth={1} overflow='hidden'>
            <Icon as={props.icon} w={20} h={20} mb={10} />
            <Box p='6' display='flex' alignItems='baseline'>
                <BadgeStatus currentStatus={props.currentStatus} ></BadgeStatus>
            </Box>
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
            >
                {props.title}
            </Box>
        </Box>
    );
}