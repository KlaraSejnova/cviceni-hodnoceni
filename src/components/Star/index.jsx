import "./style.css";

export const Star = ({ onSelect, value, glowing }) => {
  const starClass = glowing ? "rating__star rating__star--on" : "rating__star";

  const clickHandler = () => {
    onSelect(value);
  };

  return <div className={starClass} onClick={clickHandler}></div>;
};
