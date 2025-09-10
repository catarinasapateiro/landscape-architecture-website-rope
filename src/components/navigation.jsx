import React from "react";

export const Navigation = (props) => {
  const toggleLanguage = () => {
    props.setSelectLanguage((prev) => (prev === "EN" ? "PT" : "EN"));
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
                Sobre
              </a>
            </li>

            <li>
              <a href="#portfolio" className="page-scroll">
                Projectos
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Contactos
              </a>
            </li>

            <li>
              <button className="button-language" onClick={toggleLanguage}>
                {props.selectLanguage === "EN" ? "PT" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
