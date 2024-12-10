
function NavBar(props) {
    const{img,alt}=props;
    const enlaces = [
        {
            link: "index",
            nombre: "Inicio"
        },
        {
            link: "producto",
            nombre: "Productos"
        },
        {
            link: "contact",
            nombre: "Contacto"
        }
    ];

    return (
        <header id="header">
            <div>
                <a href="./index.html">
                    <img src={img} alt={alt} style={{ height: '50px' }} />
                </a>
            </div>
            <div className="navbar">
                <nav>
                    <ul>
                        {enlaces.map((enlace) => (
                            <li key={enlace.link}>
                                <a href={`./${enlace.link}.html`}>{enlace.nombre}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
