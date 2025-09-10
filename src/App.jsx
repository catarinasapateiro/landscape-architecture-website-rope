import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { PopUp } from "./components/popUp";
import { About } from "./components/about";

import { Gallery } from "./components/gallery";

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
  const [selectLanguage, setSelectLanguage] = useState("PT");

  console.log(selectedProject, "project");

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
      <Navigation
        selectLanguage={selectLanguage}
        setSelectLanguage={setSelectLanguage}
      />
      <Header data={landingPageData.Header} />

      <About data={landingPageData.About} />

      <Gallery data={landingPageData.Gallery} setPopUp={handleOpenPopUp} />
      {selectedProject && (
        <PopUp project={selectedProject} onClose={handleClosePopUp} />
      )}

      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
