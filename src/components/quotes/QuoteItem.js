import { useNavigate } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  let navigate = useNavigate();
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <button
        className="btn"
        onClick={() => navigate(`../../../quotes/${props.id}`)}
      >
        View Fullscreen
      </button>
    </li>
  );
};

export default QuoteItem;
