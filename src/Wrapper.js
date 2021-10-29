import logo from "./logo.svg";
import "./App.css";
import Link from "./Link";

function Wrapper(props) {
  const { isPreAp } = props;
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20rem",
    textDecoration: "none",
  };

  return (
    <div style={style}>
      <Link
        text={!isPreAp ? "APGoogle" : "PreAPGoogle (Under Maintenance)"}
        link={!isPreAp ? "http://www.google.com/" : ""}
      />
    </div>
  );
}

export default Wrapper;
