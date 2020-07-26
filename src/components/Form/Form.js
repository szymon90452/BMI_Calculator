import React from "react";
import male from "./male.png";
import female from "./female.png";
import "./Form.css";

function Form(props) {
  return (
    <div className="col-md-6" id="right">
      <div className="form">
        <div className="form-group" id="sex-radio">
          <div className="sex" id="male">
            <input
              type="radio"
              id="sex"
              name="sex"
              value="male"
              onChange={props.onChangeHandler}
              defaultChecked
            />
            <img src={male} alt="male" width="50px" />
          </div>
          <div className="sex" id="female">
            <input
              type="radio"
              id="sex"
              name="sex"
              value="female"
              onChange={props.onChangeHandler}
            />
            <img src={female} alt="female" width="50px" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="height">
            Height: <span className="value">{props.state.height} cm</span>
          </label>
          <input
            type="range"
            className="form-control"
            id="height"
            min="100"
            max="200"
            step="1"
            defaultValue="150"
            name="height"
            onChange={props.onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">
            Weight: <span className="value">{props.state.weight} kg</span>
          </label>
          <input
            type="range"
            className="form-control"
            id="weight"
            min="50"
            max="150"
            step="1"
            defaultValue="100"
            name="weight"
            onChange={props.onChangeHandler}
          />
        </div>
        <button className="btn" onClick={props.calculateBMI}>
          Check!
        </button>
      </div>
    </div>
  );
}

export default Form;
