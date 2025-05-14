import { Nav } from "./Nav";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); 
  const showHero = location.pathname === "/"; 

  return (
    <header className="header">
      <Nav />
      {showHero && ( 
        <div className="header__hero-component">{<Hero />}</div>
      )}
    </header>
  );
};

export default Header;
