import Navbar from "./navbar";

export default function Layout({ children: any }) {
    return (
        <div>
            <Navbar></Navbar>
            <main>{{ children }}</main>
        </div>
    );
}