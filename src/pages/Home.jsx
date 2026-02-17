import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../page-elements/home-elements/Banner";
import "../page-elements/Home-elements/home-css/home.css";
import AboutSection from "../page-elements/Home-elements/AboutSection";
import ServiceSlider from "../page-elements/Home-elements/ServiceSlider";
import WorkProcess from "../page-elements/Home-elements/WorkProcess";
import VideoSection from "../page-elements/Home-elements/VideoSection";
import EnergyProgress from "../page-elements/Home-elements/EnergyProgress";
import WhyChooseUs from "../page-elements/Home-elements/WhyChooseUs";
import StatsBar from "../page-elements/Home-elements/StatsBar";
import SolarCalculator from "../page-elements/Home-elements/SolarCalculator";
import OutlineHeading from "../page-elements/Home-elements/OutlineHeading";

<WorkProcess />;

// import Footer from "../component/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutSection />
      <ServiceSlider />
      <WorkProcess />
      <VideoSection />
      <EnergyProgress />
      <WhyChooseUs />
      <StatsBar />
      <SolarCalculator />
      <OutlineHeading />
      <Footer />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
