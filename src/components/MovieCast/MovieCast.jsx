import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              api_key: "71720e85a59a5a868595d20116a7d65a",
            },
          }
        );
        setCasts(data.cast);
      } catch (error) {}
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h4>Actors:</h4>

      {casts.length === 0 ? (
        <p>Інформація про акторів відсутня.</p>
      ) : (
        <ul>
          {casts.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : "https://via.placeholder.com/100x150?text=No+Image"
                }
                alt={name}
                width="100"
              />
              <p>
                <strong>{name}</strong> як <em>{character}</em>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
