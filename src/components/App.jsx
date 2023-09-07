import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "pages/HomePage";
import MoviePage from "pages/MoviesPage";
import MovieDetailsPage from "pages/MovieDetailsPage";
import Cast from "./Cast";
import Reviews from "./Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
