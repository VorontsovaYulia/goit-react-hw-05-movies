import { Outlet } from "react-router-dom";

const MoviePage = () => {
    return (
        <>
        <div>
                <input type="text" />
                <button typy="button">Search</button>
        </div>
            <Outlet />
            </>
    );
};

export default MoviePage;