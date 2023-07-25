import CircularCard from "../../common/CircularCard/CircularCard";
import Text from "../../common/Text/Text";
import "./TopBrands.css";
import { topBrandsData } from "./constants";
export default function TopBrands() {
    return (
      <div className="top-brands-container">
        <Text text="Top brands for you" variant="h1" />
        <div className="top-brand-card-container">
          {topBrandsData.map((value) => (
            <CircularCard image={value.image} text={value.text} key={value.id} time={value.time} variant="bold-p" />
          ))}
        </div>
      </div>
    );
}