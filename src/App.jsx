import React from "react";
import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ProjectManagement from "./components/ProjectManagement.jsx";
import FloatingImage from "./components/FloatingImage.jsx";
import LifeCycle from "./components/LifeCycle.jsx";
import FeaturesSection from "./components/FeatureSection.jsx";
import Services from "./components/Services.jsx";

const App = () => {
  return (
    <div>
      {/* <FloatingImage/> */}
      <TopBar />
      <Navbar />
      <Hero/>
      <About/>
      <ProjectManagement/>
      <Services/>
      <LifeCycle/>
      <FeaturesSection/>
      <Footer/>
    </div>
  );
};

export default App;
