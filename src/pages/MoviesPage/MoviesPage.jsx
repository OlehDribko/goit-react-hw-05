import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SerchForm from "../../components/SerchForm/SerchForm";
import { searchMoevies } from "../../services/moviesApi";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      try {
        const data = await searchMoevies(query);
        setMovie(data.results);
      } catch (error) {
        alert(error);
      }
    };
    fetchMovies();
  }, [query]);
  const onSubmit = (query) => {
    setSearchParams({ query });
  };
  return (
    <div>
      <SerchForm onSubmit={onSubmit} />
      <MovieList movies={movie} />
    </div>
  );
};

export default MoviesPage;
