import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "./CartWidget";

function NavBar(props) {
    return (
        <header>
            <div>
                <NavLink to="/">
                    <img src="\public\images\Equa.png" alt="Logotipo de Equa" />
                </NavLink>
            </div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/category/man">Hombre</NavLink></li>
                    <li><NavLink to="/category/woman">Mujer</NavLink></li>
                    <li><NavLink to="/category/kids">Niños</NavLink></li>
                    <li><NavLink to="/category/accesories">Accesorios</NavLink></li>
                    <li><NavLink to="/cart">Carrito</NavLink> </li>
                    <li><NavLink to="/item"></NavLink></li>
                </ul>
            </nav>
            <div>
                <CartWidget />
            </div>
        </header>
    );
}

export default NavBar;

