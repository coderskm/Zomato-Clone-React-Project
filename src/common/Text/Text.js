import "./Text.css";

export default function Text({ text, variant }) {
    const getStyle = (type) => {
        switch (type) {
          case `h1`:
            return "text-h1";
          case `h2`:
            return "text-h2";
          case `h3`:
            return "text-h3";
          case `h4`:
            return "text-h4";
          case `bold-p`:
            return "text-bold-p";
          case `p2`:
            return "text-p2";
          case `p3`:
            return "";
          case `p4`:
            return "";
          default:
            return null;
        }
    }
    
    return (<p className={getStyle(variant)}>{text}</p>);
}