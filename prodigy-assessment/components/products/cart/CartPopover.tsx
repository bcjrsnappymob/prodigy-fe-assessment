import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow } from '@chakra-ui/react';
import { InsuranceItem } from '../../../models/product';

export type CartPopoverProps = {
    data: InsuranceItem[],
};

export const CartPopover = (props: CartPopoverProps) => {
    console.log(props);
    return (
        <Popover>
            <PopoverTrigger>
                <Button>Cart</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow></PopoverArrow>
                </PopoverContent>
            </Portal>
        </Popover>
    );
}