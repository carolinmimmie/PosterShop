import { Button } from "../Button";

const Hero = () => {
  return (
    <div>
      <img
        src="/src/assets/posterwall.jpg"
        alt="big hero image on a posterwall"
      />
      <div className="button">
        <Button>Shop posters here</Button>
      </div>
    </div>
  );
};

export default Hero;
