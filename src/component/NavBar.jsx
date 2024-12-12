import React, { useState } from 'react';

function NavBar(props) {
    const { img, alt ,img2,alt2} = props;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const enlaces = [
        { link: "index", 
            nombre: "Inicio" },
        { 
            link: "man", 
            nombre: "Hombre"},
        { link: "woman",
        nombre: "Mujer" },
        { link: "kids",
            nombre: "Niños" },
            { link: "accesories",
                nombre: "Accesorios" }
    ];

    return (
        <header id="header">
            <div>
                <a href="./index.html">
                    <img src={img} alt={alt} style={{ height: '50px' }} />
                </a>
                <a href=""><img src={img2} alt={alt2} /></a>
            </div>
            <div className="navbar">
                <nav>
                    <ul>
                        {enlaces.map((enlace, index) => (
                            <li 
                                key={index} 
                                onMouseEnter={enlace.subMenu ? toggleDropdown : null} 
                                onMouseLeave={enlace.subMenu ? toggleDropdown : null}
                            >
                                <a href={`./${enlace.link}.html`}>{enlace.nombre}</a>
                                {enlace.subMenu && dropdownOpen && (
                                    <ul className="dropdown">
                                        {enlace.subMenu.map((sub, idx) => (
                                            <li key={idx}><a href={`#${sub.toLowerCase()}`}>{sub}</a></li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
