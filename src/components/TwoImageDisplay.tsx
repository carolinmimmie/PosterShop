import { Link } from "react-router-dom";

const TwoImageDisplay = () => {
  return (
    <div className="twoimagedisplay">
      <div className="twoimagedisplay__container">
        <div className="twoimagedisplay__img">
          <img src="/assets/barcelona.jpg" alt="Barcelona cityscape" />
        </div>
        <div className="twoimagedisplay__text">
          <h3>Photo Art</h3>
          <h3>Shop Now</h3>
        </div>
      </div>

      <div className="twoimagedisplay__container">
        <div className="twoimagedisplay__img">
          <img src="/assets/palms.jpg" alt="Palm trees in the sunset" />
        </div>

        <div className="twoimagedisplay__text">
          <h3>Favorites</h3>
          <Link to={`/bestsellers`}>
            <h3>Shop Bestsellers</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TwoImageDisplay;
