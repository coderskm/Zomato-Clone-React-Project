import "./RestaurantDetailsCard.css";
import Text from "../Text/Text";
function RestaurantDetail({ image, coupon, title, rating, description, price, time, showMaxSafety }) {
  return (
    <div className="restaurant-details-card-container">
      <div>
        <img src="" alt="" className="restaurant-details-card-image" />
      </div>
      <div className="restaurant-details-card-title-container">
        <Text text="The Cke Comapny" variant="h4" />
        <div className="restaurant-details-card-rating">
                  <Text text="4" variant="bold-p" />
                  <p>&#9734;</p>
        </div>
      </div>
      <div className="restaurant-details-card-description-container">
        <div className="restaurant-details-card-description">
          <Text text="" />
        </div>
        <Text text="" />
      </div>
      <div className="restaurant-details-card-time">
        <Text text="34 min" variant="p2" />
      </div>
    </div>
  );
}

export default RestaurantDetail;
