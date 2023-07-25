import "./CircularCard.css";
import Text from "../Text/Text";
export default function CircularCard({ image, text, time, variant }) {
  return (
    <div className="inspiration-card-container">
      <img className="inspiration-card-image" src={image} alt={text} />
      <div className="circular-card-text">
        <Text variant={variant} text={text} />
        {time && <Text text={time} variant="bold-p" />}
      </div>
    </div>
  );
}
