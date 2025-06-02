import { NavLink } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <header className="bg-black drop-shadow-md absolute w-full">
      <nav className="mx-auto flex items-center p-7 justify-between lg:px-8">
        <div className="flex gap-x-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
          <p className="text-white font-bold">
            <NavLink to="/">Mapped Project</NavLink>
          </p>
        </div>
        <ul className="flex items-center gap-10 text-white">
          <li>
            <NavLink to="/geolocalisation">Géolocalisation</NavLink>
          </li>
          <li>
            <NavLink to="/cartographie">Cartographie</NavLink>
          </li>
          <li>
            <NavLink to="/donnees">Données</NavLink>
          </li>
          <li>
            <NavLink to="/statistiques">Statistiques</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
