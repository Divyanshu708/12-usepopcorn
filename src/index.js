import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={5} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      size={50}
      message={["bad", "poor", "okay", "good", "amazing"]}
    />
    <StarRating
      maxRating={5}
      message={["bad", "good", "nice"]}
      color={"red"}
      size={30}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
