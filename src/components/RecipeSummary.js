import React, { Component } from "react";

import "../styles/default.css";

class RecipeSummary extends Component {
  render() {
    return (
      <table id="summaryTable">
        <tbody>
          <tr>
            <th>Ingredients</th>
            <th>Calories</th>
          </tr>
          <tr>
            <td id="ingredientsTotal">{this.props.ingredients}</td>
            <td id="caloriesTotal">{this.props.calories}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default RecipeSummary;
