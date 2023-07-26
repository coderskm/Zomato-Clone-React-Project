import "./RestaurantDetailsCard.css";
import Text from "../Text/Text";
function RestaurantDetail({ image, coupon, title, rating, description, price, time, showMaxSafety }) {
  return (
    <div className="restaurant-details-card-container">
      <div>
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/8/19803678/365eb84dced494844fc142944ec7272b_o2_featured_v2.jpg"
          alt="restaurant"
          className="restaurant-details-card-image"
        />
      </div>
      <div className="restaurant-details-card-title-container">
        <Text text="The Cake Comapny" variant="h4" />
        <div className="restaurant-details-card-rating">
          <Text text="4" variant="bold-p" />
          <p>&#9734;</p>
        </div>
      </div>
      <div className="restaurant-details-card-description-container">
        <div className="restaurant-details-card-description">
          <Text text="Ice Cream, Mithai, Desserts" />
        </div>
        <Text text="₹100" />
      </div>
      <div className="restaurant-details-card-time">
        <Text text="34 min" variant="p2" />
      </div>
    </div>
  );
}

export default RestaurantDetail;
