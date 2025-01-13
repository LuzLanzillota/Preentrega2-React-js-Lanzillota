import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
    return (
        <header>
            <div>
                <NavLink to="/">
                    <img src="\public\images\Equa.png" alt="Logotipo de Equa" />
                </NavLink>
            </div>
            <nav class="navbar">
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/category/man">Hombre</NavLink></li>
                    <li><NavLink to="/category/woman">Mujer</NavLink></li>
                    <li><NavLink to="/category/kids">Niños</NavLink></li>
                    <li><NavLink to="/category/accesories">Accesorios</NavLink></li>
                    <li><NavLink to="/item"></NavLink></li>
                </ul>
            </nav>
            <div>
                <img src="\public\images\usuario.png" alt="Imagen de usuario" class="right-img" />
            </div>
        </header>

    );
}

export default NavBar;
