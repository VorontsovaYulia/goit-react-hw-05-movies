import { Link, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
    return (
        <div>
            MovieDetailsPage
            <ul>
                <li>    
                    <Link to="cast">Cast</Link>
                </li>
                <li> 
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;