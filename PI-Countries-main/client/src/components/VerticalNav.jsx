import style from "../styles/VerticalNav.module.css"
import {SearchBar} from "./SearchBar";

const VerticalNav = ({ onSearch }) => {
  return (
    <nav className={style.verticalNav}>
      <h1>Find</h1>
      <SearchBar onSearch={onSearch} />
      <ul>
        <li><a href="#">Enlace 1</a></li>
        <li><a href="#">Enlace 2</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
        <li><a href="#">Enlace 3</a></li>
      </ul>
    </nav>
  );
};

export default VerticalNav;






