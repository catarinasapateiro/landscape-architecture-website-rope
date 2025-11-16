import React from "react";
import { useLanguage } from "../contexts/LanguageContext.js";

export const About = (props) => {
  const { language, setLanguage } = useLanguage();

  // Reusable function to format description with paragraphs
  const formatDescription = (text) => {
    if (!text) return <p>loading...</p>;

    // Handle /n/n (wrong format) and \n\n (correct format)
    const normalizedText = text
      .replace(/\/n\/n/g, "\n\n") // Fix /n/n to proper line breaks
      .replace(/\\n/g, "\n") // Handle literal \n if needed
      .replace(/\r\n/g, "\n") // Normalize Windows line breaks
      .replace(/\r/g, "\n"); // Normalize old Mac line breaks

    // Split by multiple line breaks (paragraphs)
    const paragraphs = normalizedText.split(/\n\s*\n/);

    return paragraphs
      .map((paragraph, index) => {
        const trimmed = paragraph.trim();
        // Only render non-empty paragraphs
        return trimmed ? (
          <p key={index} className="description-paragraph">
            {trimmed}
          </p>
        ) : null;
      })
      .filter(Boolean); // Remove any null values
  };

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
              {console.log(props.data)}
              <h2> {language === "en" ? "About us" : "Sobre nos"}</h2>
              <div className="about-text-manifesto-small-container">
                <h4> {props.data ? props.data.titleone : "loading..."}</h4>
                <div className="formatted-paragraphs">
                  {props.data
                    ? formatDescription(props.data.paragraph)
                    : "loading..."}
                </div>
              </div>
              <div className="about-text-small-container">
                <h4> {props.data ? props.data.titletwo : "loading..."}</h4>
                <div className="formatted-paragraphs">
                  {props.data
                    ? formatDescription(props.data.paragraphtwo)
                    : "loading..."}
                </div>
              </div>
              <div className="about-text-small-container">
                <h4> {props.data ? props.data.titlethree : "loading..."}</h4>
                <div className="formatted-paragraphs">
                  {props.data
                    ? formatDescription(props.data.paragraphthree)
                    : "loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
