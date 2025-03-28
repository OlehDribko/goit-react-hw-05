import { lazy } from "react";
import "./App.css";
import fetchArticles from "./utils/asincFunc";
import {
  Route,
  Routes,
  useParams,
  useSearchParams,
  Link,
} from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));

const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import style from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
