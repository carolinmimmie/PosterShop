import React from "react";

const ThreeImageDisplay = () => {
  return (
    <div className="threeimagedisplay">
      <div className="threeimagedisplay__container">
        <div className="threeimagedisplay__img">
          <img src="src/assets/greenflower.jpg" alt="Green flower" />
        </div>
        <div className="threeimagedisplay__text">
          <h3>Photo Art</h3>
          <h3>Shop Now</h3>
        </div>
      </div>
      <div className="threeimagedisplay__container">
        <div className="threeimagedisplay__img">
          <img src="src/assets/swimmers.jpg" alt="Swimmers" />
        </div>
        <div className="threeimagedisplay__text">
          <h3>Trending</h3>
          <h3>Best Sellers</h3>
        </div>
      </div>
      <div className="threeimagedisplay__container">
        <div className="threeimagedisplay__img">
          <img src="src/assets/clouds.avif" alt="Cloudy sky" />
        </div>
        <div className="threeimagedisplay__text">
          <h3>Popular Now</h3>
          <h3>Shop Favorites</h3>
        </div>
      </div>
    </div>
  );
};

export default ThreeImageDisplay;
