import { useState } from 'react';
import style from './HomePage.module.css'

const HomePage = ({articles , onSearch}) => {
const [query, setQuery] = useState('');
const handelSubmit = (event) => {
    event.preventDefault()
}

    if (!articles || !articles.results) {
        return <p>Завантаження...</p>;
      }
    console.log(articles.results);
  return (
    <div>
      <div>
       <form action="">
       <input type="text" />
       <button type="submit">Search</button>
       </form>
      </div>
      <ul className={style.filmList} >
        {articles.results.map(movie => (<li key={movie.id}>{movie.title}</li>))}
      </ul>
    </div>
  );
};

export default HomePage;
