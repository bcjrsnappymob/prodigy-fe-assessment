import Navbar from './navbar';
import Footer from './footer';
import { Box } from '@chakra-ui/react';

export default function Layout({ children }: any) {
    return (
        <div>
            <Navbar></Navbar>
            <Box
                minH="100%"
            >
                <main>{ children }</main>
            </Box>
            <Footer></Footer>
        </div>
    );
}