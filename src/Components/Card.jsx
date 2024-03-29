import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const { handleAddFavorite } = useContext(ContextGlobal);

  
  return (
    <div className="card-grid">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <div className="card">
          <img src="../public/images/doctor.jpg"/>
          <h2>{name}</h2>
          <p>{username}</p>
          <Link to={`/details/${id}`}>Ver detalles</Link>
          <button onClick={() => handleAddFavorite({ name, username, id })} className="favButton">Add fav</button>
        </div>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
