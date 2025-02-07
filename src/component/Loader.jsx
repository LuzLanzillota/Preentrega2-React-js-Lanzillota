import React from 'react';
import { SpinnerDotted } from 'spinners-react';

function Loader() {
    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        width: '100vw', 
        position: 'fixed', 
        top: 0, 
        left: 0,
        zIndex: 9999, 
    };

    return (
        <div style={loaderStyle}>
            <SpinnerDotted
                size={72} 
                thickness={148}
                speed={100} 
                color="#000000" 
            />
        </div>
    );
}

export default Loader;

