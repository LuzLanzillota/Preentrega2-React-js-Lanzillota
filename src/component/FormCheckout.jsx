import { useState } from "react";

export default function Form() {
    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        age: "",
    });

    function onInputChange(evt) {
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = evt.target.value;
        setUserData(newUserData);
    }

    function onSubmit(evt) {
        evt.preventDefault(); // Prevenir el comportamiento por defecto (recargar la página)
        console.log(`Gracias por tu compra, ${userData.username}`);
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Completa tus datos para completar la compra🛍</h2>

            <div style={{ display: "flex", marginBottom: 8 }}>
                <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
                <input
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={onInputChange}
                />
            </div>

            <div style={{ display: "flex", marginBottom: 8 }}>
                <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
                <input
                    name="surname"
                    type="text"
                    value={userData.surname}
                    onChange={onInputChange}
                />
            </div>

            <div style={{ display: "flex", marginBottom: 8 }}>
                <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
                <input
                    name="age"
                    type="text"
                    value={userData.age}
                    onChange={onInputChange}
                />
            </div>

            <button
                type="submit"
                disabled={!(userData.username && userData.surname && userData.age)}
            >
                Crear orden
            </button>
        </form>
    );
}
