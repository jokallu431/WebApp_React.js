import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Indonesia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud"
        />
        <TripData
          image={Trip2}
          heading="Trip to Malaysia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud"
        />
        <TripData
          image={Trip3}
          heading="Trip to France"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud"
        />
      </div>
    </div>
  );
}

export default Trip;
