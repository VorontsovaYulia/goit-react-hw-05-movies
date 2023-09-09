import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyled";
import { Container, Header, List, Link } from "./Layout.styled";
import { Suspense } from "react";
import { ScaleLoader } from "react-spinners";

const Layout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <List>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                    </List>
                </nav>
            </Header>
            <main>
                <Suspense fallback={<ScaleLoader color="orangered" />}>
                     <Outlet />
                </Suspense>
                <GlobalStyle />
            </main>
        </Container>
    );
};

export default Layout;