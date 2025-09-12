import { Image } from "./image";
import { useLanguage } from "../contexts/LanguageContext.js";

export const Gallery = (props) => {
  const { language } = useLanguage();
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2> {language === "en" ? "Projects" : "Projectos"}</h2>
                 </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      onClick={() => {
                        props.setPopUp(d);
                        console.log("clicked");
                      }}
                      title={d.title}
                      smallImage={d.smallImage}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
