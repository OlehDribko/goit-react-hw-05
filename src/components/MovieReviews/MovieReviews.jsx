import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            params: {
              api_key: "71720e85a59a5a868595d20116a7d65a",
            },
          }
        );
        setReviews(data.results);
      } catch (error) {}
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h4>Reviews:</h4>

      {reviews.length === 0 ? (
        <p>No Reviewes</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}:</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieReviews;
