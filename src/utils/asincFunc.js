import axios from "axios";

const API_KEY = "71720e85a59a5a868595d20116a7d65a";
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

const fetchArticles = async ( setArticles ) => {
  try {
    const response = await axios.get(url);
   
    setArticles(response.data)
  } catch (error) {
    console.error("Помилка запиту:", error.response?.data || error.message);
  }
};

export default fetchArticles;

