import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Сторінку не знайдено</p>
      <Link to="/" className={style.link}>
        ← Повернутись на головну
      </Link>
    </div>
  );
};

export default NotFoundPage;
