import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyled";
import { Container, Header, List, Link } from "./Layout.styled";

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
                <Outlet />
                <GlobalStyle />
            </main>
        </Container>
    );
};

export default Layout;