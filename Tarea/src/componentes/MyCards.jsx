// MyCard.jsx
import React, { useContext } from "react";
import { Contexto } from "../context/MiProvider";

function MyCard() {
    const {tripulaciones, setTripulaciones, busqueda } = useContext(Contexto);

    // Filtrar jugadores según la búsqueda
    const tripulacionesFiltrados = tripulaciones.filter((tripulacion) =>
        tripulacion.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    function handleLike(id) {
        const updatedTripulaciones = tripulaciones.map((tripulacion) => {
            if (tripulacion.id === id) {
                return { ...tripulacion, likes: (tripulacion.likes || 0) + 1 };
            }
            return tripulacion;
        });
        setTripulaciones(updatedTripulaciones);
    }

    function handleDelete(id) {
        const updatedTripulaciones = tripulaciones.filter((tripulacion) => tripulacion.id !== id);
        setJugadores(updatedTripulaciones);
    }

    return (
        <div className="card-container">
            {tripulacionesFiltrados.map((tripulacion) => (
                <div key={tripulacion.id} className="card">
                    <div className="card-content">
                        <img className="imgCard" src={tripulacion.bandera} alt={tripulacion.nombre} />
                        <h1>{tripulacion.nombre}</h1>
                        <h4>Poder: {tripulacion.poder}k </h4>
                        <h1>{tripulacion.categoria}</h1>
                        <p>Capitán: {tripulacion.capitan}</p>
                        <p>Comandantes: {tripulacion.comandantes}</p>
                        <p>Barco: {tripulacion.barco}</p>

                    </div>
                    <button className="btnLike" onClick={() => handleLike(tripulacion.id)}>
                    ♥ {tripulacion.likes || 0}
                    </button>
                    <button className="btnElim" onClick={() => handleDelete(tripulacion.id)}>
                        X
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MyCard;
