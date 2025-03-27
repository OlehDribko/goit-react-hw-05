import { useEffect, useState } from "react";
import style from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../services/moviesApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results)
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
