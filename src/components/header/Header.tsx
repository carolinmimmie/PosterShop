import { Nav } from "./Nav";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <div className="header__hero-component">
        <Hero />
      </div>
    </header>
  );
};

export default Header;
