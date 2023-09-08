import { Outlet } from "react-router-dom";
import { InputBox } from "./MoviePage.styled";

const MoviePage = () => {
    return (
        <>
        <InputBox>
                <input type="text" />
                <button typy="button">Search</button>
        </InputBox>
            <Outlet />
            </>
    );
};

export default MoviePage;