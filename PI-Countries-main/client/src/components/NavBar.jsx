import { Link } from "react-router-dom";
import style from "../styles/NavBar.modules.css"

const NavBar = () => {
    return (
        <div className={style.mainCountainer}>
            <Link to="/home">HOME</Link>
            <Link to="/Activities">ACTIVITIES</Link>
            <Link></Link>
        </div>
    )
}


export default NavBar;