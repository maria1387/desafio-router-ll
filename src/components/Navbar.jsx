import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";
import { RiMapPinLine } from 'react-icons/ri';
const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav>
      <section className="contenedor nav">
        <div className="logo">
        <span><RiMapPinLine className="logo-icon"/></span>
        </div>
        <div className="enlaces-header">
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
          
          <NavLink to="/pokemones" className={setActiveClass}>
            Pokemones
          </NavLink>
        </div>
        <div className="hamburguer">
          <i className="fas fa-bars"></i>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
