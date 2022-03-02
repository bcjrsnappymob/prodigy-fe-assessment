import { 
    Popover, 
    PopoverTrigger,
    Button,
    Portal,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverCloseButton,
    PopoverBody,
    Text 
} from '@chakra-ui/react';
import { InsuranceItem } from '../../../models/product';
import CartCard from './CartCard';

export type CartPopoverProps = {
    data: InsuranceItem[],
};

export const CartPopover = (props: CartPopoverProps) => {

    const cartItems = (props: CartPopoverProps) => {
        if (props.data.length === 0) {
            return (
                <PopoverBody>
                    <Text>Cart is Empty</Text>
                </PopoverBody>
            );
        }

        return (
            <PopoverBody>
                { props.data.map((item: InsuranceItem, id: number) => {
                    return <CartCard key={id} data={item}></CartCard>
                }) }
            </PopoverBody>
        );
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    fontSize={'sm'}
                    fontWeight={400}
                    variant={''}
                    _hover={{textDecoration: 'none'}}
                >
                    Cart
                </Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow></PopoverArrow>
                    <PopoverHeader>Cart Items</PopoverHeader>
                    <PopoverCloseButton></PopoverCloseButton>
                    { cartItems(props) }
                </PopoverContent>
            </Portal>
        </Popover>
    );
}