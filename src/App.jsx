import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import fetchArticles from "./utils/asincFunc";
import { Route, Routes, useParams, useSearchParams, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import style from './App.module.css'


function App() {
const [searchParams, setSearchParams] = useSearchParams();

const [articles , setArticles]= useState(null);


console.log(searchParams.get('query'));
const handelSearch = async (topic) => {
try {
  const data = await fetchArticles(topic)
} catch (error) {
  console.log(error);
}

}

  useEffect(() => {
    fetchArticles(setArticles);
  }, []);
console.log(articles);
  return (
    <div>
      <nav className={style.navLinks}>
        <Link to="/">HomePage</Link>
        <Link to="/movies">MoviesPage</Link>
        <Link to="/movies/:movieId">MovieDetailsPage</Link>
        <Link to=""></Link>
      </nav>
      <Routes>
  <Route path="/" element={<HomePage articles={articles} onSearch={handelSearch}/>} />
  
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
