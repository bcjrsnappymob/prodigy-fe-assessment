import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBar() {
    return (
        <InputGroup w={60}>
            <Input
                id="search"
                type="search"
                placeholder={'Search'}
                borderRadius={'full'}
                fontSize={14}
            />
            <InputRightElement as="button" type="submit" cursor="pointer">
                <SearchIcon color="black" />
            </InputRightElement>
        </InputGroup>
    );
}