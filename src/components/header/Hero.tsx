import { Banner } from "../Banner";

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero__img"
        src="/assets/posterwall.jpg"
        alt="big hero image on a posterwall"
      />
      <div className="hero__banner">
   <Banner/>
   </div>
    </div>
  );
};

export default Hero;
