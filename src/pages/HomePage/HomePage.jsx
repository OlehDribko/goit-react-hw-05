import { useState } from 'react';
import style from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList';

const HomePage = ({articles , onSearch}) => {
const [query, setQuery] = useState('');
const handelSubmit = (event) => {
    event.preventDefault()
}

    if (!articles || !articles.results) {
        return <p>Завантаження...</p>;
      }
  return (
    <div>
      <div>
       <form action="">
       <input type="text" />
       <button type="submit">Search</button>
       </form>
      </div>
      <ul className={style.filmList} >
        <MovieList movies={articles.results}/>
      </ul>
    </div>
  );
};

export default HomePage;
