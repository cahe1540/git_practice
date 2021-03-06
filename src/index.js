import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Wrapper from "./Wrapper";

ReactDOM.render(
  <React.StrictMode>
    <Wrapper isPreAp={true}></Wrapper>
    <div>
      <h1 className="HELLO-WORLD">Hello World!!!!!</h1>
      <h2 className="HELLO-WORLD">NO!!</h2>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
