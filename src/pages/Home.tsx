import SectionDivider from "../components/SectionDivider";
import { Slider } from "../components/Slider";
import ThreeImageDisplay from "../components/ThreeImageDisplay";
import TwoImageDisplay from "../components/TwoImageDisplay";

export const Home = () => {
  return (
    <section className="home">
      <h2>Tavlor vi gillar</h2>
      <Slider></Slider>
      <TwoImageDisplay></TwoImageDisplay>
      <h2>Nyheter</h2>
      <Slider></Slider>
      <ThreeImageDisplay></ThreeImageDisplay>
      <div className="divider"></div>
      <SectionDivider></SectionDivider>
    </section>
  );
};
