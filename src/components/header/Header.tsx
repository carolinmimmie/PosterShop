import { Nav } from "./Nav";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Hämtar den aktuella URL-vägen
  const showHero = location.pathname === "/"; // Hero visas endast på "/"

  return (
    <header className="header">
      <Nav />
      {showHero && ( // Om hideHero är false (inte en produkt-sida), renderas Hero
        <div className="header__hero-component">{<Hero />}</div>
      )}
    </header>
  );
};

export default Header;
