import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody } from '@chakra-ui/react';
import { InsuranceItem } from '../../../models/product';
import CartCard from './CartCard';

export type CartPopoverProps = {
    data: InsuranceItem[],
};

export const CartPopover = (props: CartPopoverProps) => {
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
                    <PopoverBody>
                        { props.data.map((item: InsuranceItem, id: number) => {
                            return <CartCard key={id} data={item}></CartCard>
                        }) }
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    );
}