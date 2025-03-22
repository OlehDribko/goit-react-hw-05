const HomePage = ({articles}) => {
    if (!articles || !articles.results) {
        return <p>Завантаження...</p>;
      }
    console.log(articles.results);
  return (
    <div>
      <div>
        <input type="text" />
        <button type="submit"></button>
      </div>
      <ul kay={articles.results.id}>
        {articles.results.map(movie => (<li key={movie.id}>{movie.title}</li>))}
      </ul>
    </div>
  );
};

export default HomePage;
