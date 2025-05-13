import { NavLink } from "react-router-dom";
import { Button } from "../Button";

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero__img"
        src="/public/assets/posterwall.jpg"
        alt="big hero image on a posterwall"
      />
      <div className="button">
        <NavLink to={"/products"}>
          <Button>Shop posters here</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
