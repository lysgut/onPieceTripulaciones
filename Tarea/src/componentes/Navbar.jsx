import React, { useContext } from "react";
import { Contexto } from "../context/MiProvider";
// Agrega la imagen importada si aún no lo has hecho

function Navbar() {
  const { setBusqueda } = useContext(Contexto);

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src='https://vignette.wikia.nocookie.net/cartoon-anime/images/d/de/One_Piece_logo.png/revision/latest?cb=20160625194757&path-prefix=fr' alt="Logo" className="logo" />
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar tripulaciones..."
            onChange={handleSearch}
          />
          {/* Agrega un icono o botón de búsqueda si es necesario */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
