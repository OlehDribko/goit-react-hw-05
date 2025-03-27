import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state || "/");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: "71720e85a59a5a868595d20116a7d65a",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const { title, overview, vote_average, poster_path } = movie;
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `https://via.placeholder.com/300x450?text=No+Image`;

  return (
    <div>
      <Link to={goBackLink.current}>← Назад</Link>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <img src={imgUrl} alt={title} width="300" />
        <div>
          <h2>{title}</h2>
          <p>Оцінка: {vote_average}</p>
          <h3>Опис</h3>
          <p>{overview}</p>
        </div>
      </div>

      <hr />

      <div>
        <h3>Додаткова інформація:</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: goBackLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: goBackLink }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
