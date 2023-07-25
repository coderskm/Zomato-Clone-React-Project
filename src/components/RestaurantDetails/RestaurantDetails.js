import "./RestaurantDetails.css";
import RestaurantDetailsCard from "../../common/RestaurantDetailsCard/RestaurantDetailsCard";
import Text from "../../common/Text/Text";
export default function RestaurantDetails() {
    return (
      <div className="restaurant-details-container">
        <Text text="Best food in Noida" variant="h1" />
        <div className="restaurant-details-cards-container">
          <RestaurantDetailsCard />
          <RestaurantDetailsCard />
          <RestaurantDetailsCard />
        </div>
      </div>
    );
}

