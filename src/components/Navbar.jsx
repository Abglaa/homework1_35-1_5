import { NavLink} from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active-link" : "");


function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={activeLink}>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={activeLink}>
                        О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" className={activeLink}>Посты</NavLink>
                </li>
                <li>
                    <NavLink to="/postPush" className={activeLink}>PostsPush</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;