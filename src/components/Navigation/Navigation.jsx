import { NavLink } from "react-router-dom";
import style from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={({ isActive }) => isActive ? style.active : style.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={({ isActive }) => isActive ? style.active : style.link}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
