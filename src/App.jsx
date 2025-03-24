import { useEffect, useState } from "react";
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
import Navigation from "./components/Navigation/Navigation";


function App() {
const [searchParams, setSearchParams] = useSearchParams();

const [articles , setArticles]= useState(null);


const handelSearch = async (topic) => {
try {
  const data = await fetchArticles(topic)
} catch (error) {
}

}

  useEffect(() => {
    fetchArticles(setArticles);
  }, []);
  return (
    <div>
     <Navigation />
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
