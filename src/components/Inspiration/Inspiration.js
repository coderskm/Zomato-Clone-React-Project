import { inspirationData } from "./constants";
import "./Inspiration.css";
import Text from "../../common/Text/Text";
import CircularCard from "../../common/CircularCard/CircularCard";

export default function Inspiration() {
    return (
      <div className="inspiration-container">
        <Text text="Inspiration for your first order" variant="h1"/>
        <div className="inspiration-cards-container">
          {inspirationData.map((value) => (
            <CircularCard image={value.image} text={value.text} key={value.id} variant="h3" />
          ))}
        </div>
      </div>
    );
}