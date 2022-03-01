import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { ChangeEventHandler } from 'react';

export type SearchBarProps = {
    onSearch: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBar(props: SearchBarProps) {
    return (
        <InputGroup w={60}>
            <Input
                id="search"
                type="search"
                placeholder={'Search'}
                borderRadius={'full'}
                fontSize={14}
                onChange={props.onSearch}
            />
            <InputRightElement as="button" type="submit" cursor="pointer">
                <SearchIcon color="black" />
            </InputRightElement>
        </InputGroup>
    );
}