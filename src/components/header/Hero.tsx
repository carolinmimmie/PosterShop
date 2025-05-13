import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero__img"
        src="/assets/posterwall.jpg"
        alt="big hero image on a posterwall"
      />
      <div className="button">
        <NavLink to={"/products"}>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
