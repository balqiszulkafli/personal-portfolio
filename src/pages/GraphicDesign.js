import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/GraphicDesign.css";

import Poster1 from "../assets/design/Poster1.png";
import Poster2 from "../assets/design/Poster2.png";
import Poster3 from "../assets/design/Poster3.jpg";
import Poster4 from "../assets/design/Poster4.png";
import Poster5 from "../assets/design/Poster5.png";
import Poster6 from "../assets/design/Poster6.png";
import Poster7 from "../assets/design/Poster7.png";

function GraphicDesign() {
  return (
    <div className="carousel-container">
      <Carousel>
        <div>
          <img src={Poster1} alt="Poster 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Poster2} alt="Poster 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Poster3} alt="Poster 3" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Poster4} alt="Image3" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Poster5} alt="Image3" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Poster6} alt="Image3" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Poster7} alt="Image3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default GraphicDesign;
