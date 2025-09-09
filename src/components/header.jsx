import React, { useState, useEffect } from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

/*import React, { useState, useEffect } from "react";

export const Header = ({ data }) => {
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <header id="header">
      <div className="intro" style={{ background: `url(${images[current]}) center center no-repeat`, backgroundSize: 'cover' }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>{data ? data.title : "Loading"}</h1>
                <p>{data ? data.paragraph : "Loading"}</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Sobre nos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};*/
