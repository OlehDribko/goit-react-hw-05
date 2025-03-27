import axios from "axios";

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: {
        api_key: "71720e85a59a5a868595d20116a7d65a",
      },
    }
  );
  return data;
};
export const searchMoevies = async (query) => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        page: 1,
        api_key: "71720e85a59a5a868595d20116a7d65a",
      },
    }
  );
  return data;
};
