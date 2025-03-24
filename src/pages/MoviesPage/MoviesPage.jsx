import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);
const [inputValue, setInputValue] = useState('')

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              query,
              page: 1,
              api_key: "71720e85a59a5a868595d20116a7d65a",
            },
          }
        );
        setMovie(response.data.results);
      } catch (error) {
        alert(error);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value) setSearchParams({ query: value });
  };
  const hendleChange = (ev) => {
setInputValue(ev.target.value)
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={inputValue} onChange={hendleChange}/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MoviesPage;
