import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import fetchArticles from "./components/js/asincFunc";
import { Route, Routes, useParams, useSearchParams, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import MoviesPage from "./components/pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

function App() {
const [searchParams, setSearchParams] = useSearchParams();

const [articles , setArticles]= useState(null);


console.log(searchParams.get('query'));


  useEffect(() => {
    fetchArticles(setArticles);
  }, []);
console.log(articles);
  return (
    <div>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/movies">MoviesPage</Link>
        <Link to="/movies/:movieId">MovieDetailsPage</Link>
        <Link to=""></Link>
      </nav>
      <Routes>
  <Route path="/" element={<HomePage articles={articles}/>} />
  
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
