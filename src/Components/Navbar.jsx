import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { handleThemeChange } = useContext(ContextGlobal);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleThemeChange}>Change theme</button>
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/details'>Details</Link>
      <Link to='/contact'>Contact</Link>
      </nav>
  )
}

export default Navbar