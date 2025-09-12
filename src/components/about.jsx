import React from "react";
import { useLanguage } from "../contexts/LanguageContext.js";

export const About = (props) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2> {language === "en" ? "About us" : "Sobre nos"}</h2>
              <div className="about-text-manifesto-small-container">
                <h4> {props.data ? props.data.titleone : "loading..."}</h4>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
              <div className="about-text-small-container">
                <h4> {props.data ? props.data.titletwo : "loading..."}</h4>
                <p>{props.data ? props.data.paragraphtwo : "loading..."}</p>
              </div>
              <div className="about-text-small-container">
                <h4> {props.data ? props.data.titlethree : "loading..."}</h4>
                <p>{props.data ? props.data.paragraphthree : "loading..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
