import React from "react";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  console.log(state.favorites)

  if (!state.favorites.length) {
    return <p>Loading favorites...</p>;
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${state.theme}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favorites.map((item) => (
          <Card key={item.id} username={item.username} id={item.id} name={item.name} className="card"/>
        ))}
      </div>
    </>
  );
};

export default Favs;
