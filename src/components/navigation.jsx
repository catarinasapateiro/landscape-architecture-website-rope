import React from "react";
import { useContext } from "react";
import { useLanguage } from "../contexts/LanguageContext.js";

export const Navigation = (props) => {
  const { language, setLanguage } = useLanguage();

  // const toggleLanguage = () => {
  //   setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  // };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "pt" : "en";

      const root = document.documentElement;

      if (newLang === "pt") {
        root.style.setProperty("--primary-red", "#91937c");
        root.style.setProperty("--lighter-red", "#c5c5be");
      } else {
        root.style.setProperty("--primary-red", "#ef4752");
        root.style.setProperty("--lighter-red", "rgba(238, 105, 114)");
      }
      return newLang;
    });
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Rope <span className="navbar-brand-complement">atelier</span>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                {language === "en" ? "About" : "Sobre"}
              </a>
            </li>

            <li>
              <a href="#portfolio" className="page-scroll">
                {language === "en" ? "Projects" : "Projectos"}
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                {language === "en" ? "Contact" : "Contactos"}
              </a>
            </li>

            <li>
              <button className="button-language" onClick={toggleLanguage}>
                {language === "en" ? "pt" : "en"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
