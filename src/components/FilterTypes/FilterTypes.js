import "./FilterTypes.css";
import Type from "./Type/Type";
export default function FilterTypes() {
  return (
    <div>
      <div className="filter-types-container">
        <Type
          image="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
          text="Delivery"
        />
        <Type
          image="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
          text="Dining Out"
        />
        <Type
          image="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
          text="Nightlife"
        />
      </div>
    </div>
  );
}
