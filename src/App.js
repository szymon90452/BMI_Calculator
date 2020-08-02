import React from "react";
import "./App.css";
import Panel from "./components/Panel/Panel";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sex: "male",
      weight: 100,
      height: 150,
      visible: false,
      value: 0,
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      visible: false,
    });
  };

  calculateBMI = () => {
    console.log(this.state);
    const value = Number(
      (
        this.state.weight /
        (((this.state.height / 100) * this.state.height) / 100)
      ).toFixed(2)
    );
    this.setState({
      value: value,
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <div className="container" id="full">
          <Panel
            onChangeHandler={this.onChangeHandler}
            state={this.state}
            calculateBMI={this.calculateBMI}
          />
        </div>
      </div>
    );
  }
}

export default App;
