import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import { useEffect } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, fetchData } = useContext(ContextGlobal);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={state.theme} >
      <h1>Theme = {state.theme}</h1>
      <div className='card-grid'>
      {state.data.map((item) => (
        <Card key={item.id} name={item.name} username={item.username} id={item.id}/>
      ))}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home