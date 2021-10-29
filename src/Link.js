import logo from "./logo.svg";
import "./App.css";

function Link(props) {
  return (
    <div>
      {!(props.link === "") ? (
        <a data-testid="1" href={props.link}>
          {props.text}
        </a>
      ) : (
        <i data-testid="2">{props.text}</i>
      )}
    </div>
  );
}

export default Link;
