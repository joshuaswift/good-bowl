import React, { Component } from "react";
import { render } from "react-dom";

import "../styles/default.css";

class NutritionRow extends Component {
  render() {
    return (
      <li>{this.props.label + " " + this.props.quantity + this.props.unit}</li>
    );
  }
}

export default NutritionRow;
