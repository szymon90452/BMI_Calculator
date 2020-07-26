import React from "react";
import "./Info.css";

function Info(props) {
  let status = "";
  if (props.state.value <= 18.5) {
    status = "Underweight";
  } else if (props.state.value > 18.5 && props.state.value <= 24.9) {
    status = "Normal or Healthy Weight";
  } else if (props.state.value > 24.9 && props.state.value <= 30) {
    status = "Overweight";
  } else if (props.state.value > 30) {
    status = "Obese";
  }

  return props.state.visible ? (
    <div className="row">
      <div className="col-md-12" id="info">
        <h1>Your BMI is: {props.state.value}</h1>
        <h2>You are {status}</h2>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Info;
