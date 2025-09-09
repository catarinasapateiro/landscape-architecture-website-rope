import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { PopUp } from "./components/popUp";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isPopUpOpen, setPopUp] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  console.log(isPopUpOpen);

  function handleOpenPopUp(project) {
    setSelectedProject(project);
    setPopUp(true);
  }

  function handleClosePopUp() {
    setPopUp(false);
    setSelectedProject(null);
  }

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} setPopUp={handleOpenPopUp} />
      {selectedProject && (
        <PopUp project={selectedProject} onClose={handleClosePopUp} />
      )}
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
