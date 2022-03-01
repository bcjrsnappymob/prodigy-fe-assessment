import { Badge } from '@chakra-ui/react';
import { InsuranceStatus } from '../../constants/product';
import { BadgeProps } from '../../models/product';

export const BadgeStatus = (props: BadgeProps) => {

    let colorScheme = '';

    switch(props.currentStatus) {
        case InsuranceStatus.new: {
            colorScheme = 'teal';
            break;
        }
        case InsuranceStatus.popular: {
            colorScheme = 'red';
            break;
        }
        case InsuranceStatus.recommended: {
            colorScheme = 'yellow';
            break;
        }
        default: {
            colorScheme = '';
            break;
        }
    }

    if (colorScheme.length > 0) {
        return (
            <Badge borderRadius='full' px='2' colorScheme={colorScheme}>
                { props.currentStatus }
            </Badge>
        );
    }

    return (
        <template></template>
    );
}