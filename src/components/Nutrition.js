import React, { Component } from "react";

import NutritionRow from "./NutritionRow";
import Servings from "./Servings";

class Nutrition extends Component {
  constructor(props) {
    super(props);
    this.recipeNav = this.recipeNav.bind(this);
  }

  recipeNav() {
    window.open(
      this.props.recipeUrl,
      "_blank" // <- This is what makes it open in a new window.
    );
  }

  render() {
    const filteredNutrients = [];
    const totalNutrients = this.props.totalNutrients;

    //Defines nutrient values from JSON data which we want to display on Recipe component
    const allowedNutrients = [
      "ENERC_KCAL",
      "FAT",
      "FASAT",
      "CHOCDF",
      "FIBTG",
      "SUGAR",
      "PROCNT"
    ];

    //Filters the totalNutrients object passed down via props so that only the nutrients required are displayed
    const filteredNutrientsObj = Object.keys(totalNutrients)
      .filter(key => allowedNutrients.includes(key))
      .reduce((obj, key) => {
        obj[key] = totalNutrients[key];
        return obj;
      }, {});

    //Takes object values and
    Object.entries(filteredNutrientsObj).forEach((item, index) => {
      filteredNutrients.push(
        <NutritionRow
          key={index}
          label={item[1].label}
          unit={item[1].unit}
          quantity={Math.round(item[1].quantity / this.props.servings)}
        />
      );
    });

    return (
      <div id="nutritionListContainer" onClick={this.recipeNav}>
        <Servings servings={this.props.servings} />
        <p>Per serving:</p>
        <ul id="nutritionList">{filteredNutrients}</ul>
        <p>CLICK FOR RECIPE</p>
      </div>
    );
  }
}

export default Nutrition;
