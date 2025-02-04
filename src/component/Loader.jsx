import React from 'react';
import { SpinnerDotted } from 'spinners-react';

function Loader() {
    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Altura del contenedor para ocupar toda la pantalla
        width: '100vw', // Ancho del contenedor para ocupar toda la pantalla
        position: 'fixed', // Asegura que el loader esté siempre visible en el viewport
        top: 0, // Alineado al inicio de la pantalla
        left: 0,
        zIndex: 9999, // Asegúrate de que esté por encima de otros elementos
    };

    return (
        <div style={loaderStyle}>
            <SpinnerDotted
                size={72} // Tamaño del spinner
                thickness={148} // Grosor del spinner
                speed={100} // Velocidad del giro
                color="#000000" // Color del spinner
            />
        </div>
    );
}

export default Loader;

