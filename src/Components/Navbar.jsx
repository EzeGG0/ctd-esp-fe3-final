import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { handleThemeChange } = useContext(ContextGlobal);

  return (
    <nav>
      <img src='/images/DH.png'/>
      <button onClick={handleThemeChange} className='navButton'>Change theme</button>
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contact</Link>
      </nav>
  )
}

export default Navbar