import SectionDivider from "../components/SectionDivider";
import { Slider } from "../components/Slider";
import ThreeImageDisplay from "../components/ThreeImageDisplay";
import TwoImageDisplay from "../components/TwoImageDisplay";

export const Home = () => {
  return (
    <section className="home">
      <h2>OUR FAVORITES</h2>
      <Slider></Slider>
      <TwoImageDisplay></TwoImageDisplay>
      <h2>NEWS</h2>
      <Slider></Slider>
      <ThreeImageDisplay></ThreeImageDisplay>
      <div className="divider"></div>
      <SectionDivider></SectionDivider>
    </section>
  );
};
