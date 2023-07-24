import "./Type.css";
export default function Type({ image, text }) {
  return (
    <div className="filter-type-container">
      <div className="filter-type-image-container">
        <img className="filter-type-image" src={image} alt={text} />
      </div>
      <p className="filter-type-text">{text}</p>
    </div>
  );
}
