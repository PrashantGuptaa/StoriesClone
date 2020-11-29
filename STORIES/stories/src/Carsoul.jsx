import React, { Component } from "react";
import "./App.css";
import wall1 from "./contactData/wall1.jpg";
import wall2 from "./contactData/wall2.jpg";
import wall3 from "./contactData/wall3.jpg";
import car1 from "./contactData/car1.jpg";
import car2 from "./contactData/car2.jpg";
import car3 from "./contactData/car3.jpg";
import bird1 from "./contactData/bird1.jpg";
import bird2 from "./contactData/bird2.jpg";
import bird3 from "./contactData/bird3.jpg";
import contact1 from "./contactData/contact1.jpg";
import contact2 from "./contactData/contact2.jpg";
import contact3 from "./contactData/contact3.jpg";
import airplane1 from "./contactData/airplane1.jpg";
import airplane2 from "./contactData/airplane2.jpg";
import airplane3 from "./contactData/airplane3.jpg";
import hello1 from "./contactData/hello1.gif";
import hello2 from "./contactData/hello2.gif";
import hello3 from "./contactData/hello3.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

let allImages = [
  car1,
  car2,
  car3,
  bird1,
  bird2,
  bird3,
  contact1,
  contact2,
  contact3,
  wall1,
  wall2,
  wall3,
  airplane1,
  airplane2,
  airplane3,
  hello1,
  hello2,
  hello3,
];

export default function Carsoul(props) {
  let [storyData, setStoryData] = React.useState([]);
  let pictures = [];
  React.useEffect(() => {
    if (!props.name) return;
    fetch(`http://localhost:4000/${props.name}`)
      .then((res) => res.json())
      .then((data) => {
        setStoryData(data);
      });
  }, [props.name]);

  if (props.showCarsoul) {
    pictures = [storyData.img1, storyData.img2, storyData.img3];
  }
  return props.showCarsoul ? (
    <div className="carsoul">
      <Carousel>
        {pictures.map((picture) => (
          <div>
            <img
              src={allImages.filter((image) => image.includes(picture))}
              width="450"
              height="600"
            />
            <p className="legend">Legend 1</p>
          </div>
        ))}
      </Carousel>
    </div>
  ) : null;
}
