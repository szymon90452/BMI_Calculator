import React from "react";
import Baner from "../Baner/Baner";
import Image from "../Image/Image";
import Form from "../Form/Form";
import Info from "../Info/Info";
import "./Panel.css";

function Panel(props) {
  return (
    <>
      <Baner />
      <div className="row">
        <Image />
        <Form
          onChangeHandler={props.onChangeHandler}
          state={props.state}
          calculateBMI={props.calculateBMI}
        />
      </div>
      <Info state={props.state} />
    </>
  );
}

export default Panel;
