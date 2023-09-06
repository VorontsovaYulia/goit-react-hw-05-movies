import { Outlet } from "react-router-dom";

const MoviePage = () => {
    return (
        <>
        <div>
            MoviePage
            <input type="text" />
        </div>
            <Outlet />
            </>
    );
};

export default MoviePage;